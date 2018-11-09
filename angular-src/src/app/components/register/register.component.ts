import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Reuired Fields
    if(!this.validateService.validateRegister(user)) {
     this.flashMessage.show('Please fill in all required fields', {cssClass: 'alert-danger'}); // Milliseconds
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid Email Address', {cssClass: 'alert-danger'}); // Milliseconds
      return false;
    }
  }

}
