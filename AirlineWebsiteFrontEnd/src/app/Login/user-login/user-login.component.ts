import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/Model/user-login';
import { LoginserviceService } from 'src/app/Services/loginservice.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLogin = new UserLogin();

  constructor(private loginService: LoginserviceService) { }

  ngOnInit() {
  }
  loginCheck(){
    console.log(this.userLogin);
    this.loginService.userLogin(this.userLogin).subscribe(response => {
      alert(JSON.stringify(response));
      console.log(response);
    })
  }

}
