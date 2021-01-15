import { SearchFlightDT } from './../../Model/search-flight-dt';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Flight } from 'src/app/Model/flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  flightSearchDT = new SearchFlightDT();
  flight : Flight[] = [];
  flightFlag:boolean = false;
  
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  searchFlights(){
    console.log(this.flightSearchDT);
    this.userService.fetchFlights(this.flightSearchDT).subscribe(response => {
      console.log(JSON.stringify(response));
      this.flight =response;
      this.flightFlag = true;
      console.log(this.flight);
      alert(JSON.stringify(response));
    })
  }
  flightIdStore(id:number){
    sessionStorage.setItem('flightId',String(id));
  }

}
