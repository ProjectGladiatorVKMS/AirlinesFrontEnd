import { Component, OnInit } from '@angular/core';
import { AdminLogin } from 'src/app/Model/admin-login';
import { LoginserviceService } from 'src/app/Services/loginservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


  adminLogin: AdminLogin = new AdminLogin();

  constructor(private loginService: LoginserviceService) { }

  ngOnInit() {
  }

  loginCheck(){
    console.log(this.adminLogin);
    this.loginService.adminLogin(this.adminLogin).subscribe(response => {
      alert(JSON.stringify(response));
      console.log(response);
    })
  }

}
