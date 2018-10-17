import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class FormService {

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }

  getForms() {
    return this._tokenService.get('forms').map(res => res.json());
  }

  getForm(form_id) {
    return this._tokenService.get('forms/' + form_id).map(res => res.json());
  }

  createForm(form_params) {
    return this._tokenService.post('forms', form_params).map(res => res.json());
  }

  updateForm(form_id, form_params) {
    return this._tokenService.put('forms/' + form_id, form_params).map(res => res.json());
  }

  destroyForm(form_id) {
    return this._tokenService.delete('forms/' + form_id).map(res => res.json());
  }
}