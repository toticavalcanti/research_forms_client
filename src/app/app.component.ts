import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiPath: 'http://localhost:3000/api/v1',
      signInRedirect: '/login',
      globalOptions: {
        headers: {
          'Content-Type':     'application/json',
          'Accept':           'application/json'
        }
      }
    });
  }
}