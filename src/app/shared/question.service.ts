import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class QuestionService {

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }

  createQuestion(form_id, question) {
    return this._tokenService.post('questions', {form_id: form_id, question}).map(res => res.json());
  }

  updateQuestion(question_id, question_params) {
    return this._tokenService.put('questions/' + question_id, question_params).map(res => res.json());
  }

  destroyQuestion(question_id) {
    return this._tokenService.delete('questions/' + question_id).map(res => res.json());
  }
}