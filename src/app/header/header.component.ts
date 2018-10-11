import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { MzToastService} from 'ng2-materialize';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService, private toastService: MzToastService) { }

  ngOnInit() {
  }

  signOut() {
    this._tokenService.signOut().subscribe(
      res =>      { },
      error =>    this.toastService.show('Error in Logout', 8000, 'red')
    );
  }
}