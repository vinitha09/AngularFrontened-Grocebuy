import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  MobileNumber:any;
  Password:any;
  ConfirmPassword:any;
  terms=true;

}
