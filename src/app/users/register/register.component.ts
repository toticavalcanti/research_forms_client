import { Component, OnInit} from '@angular/core';
import { Angular2TokenService, RegisterData } from 'angular2-token';
import { MzToastService} from 'ng2-materialize';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private _registerData: RegisterData = <RegisterData>{};

  constructor(private _tokenService: Angular2TokenService, private toastService: MzToastService ) { }

  ngOnInit() {
  }

  // Submit Data to Backend
  onSubmit() {
    this._tokenService.registerAccount(this._registerData).subscribe(
      res => {
        this._registerData = <RegisterData>{};
        this.toastService.show('Success, please confirm your Email', 8000, 'green');
      }, error => {
        this._registerData = <RegisterData>{};
        if ( error.status !== 0 ) {
          for (const message of JSON.parse(error._body)['errors']['full_messages']) {
            this.toastService.show(message, 8000, 'red');
          }
        } else {
          this.toastService.show('Connection Error', 8000, 'red');
        }
      }
    );
  }
}