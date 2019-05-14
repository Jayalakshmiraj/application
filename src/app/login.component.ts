import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  
  title = ' angulartraining';
  data = {username:"",password:""};
  constructor(private router: Router){
  }

  onLogin(){
  	if(this.data.username == this.data.password){
  		this.router.navigate(['./dashboard']);
  	}else{
  		alert('username / password is not correct.');
  	}
  }
  onLogin1(){
  this.router.navigate(['./abouts']);
  }
}
// onButtonClick()
// {
//   alert("hello");
// }