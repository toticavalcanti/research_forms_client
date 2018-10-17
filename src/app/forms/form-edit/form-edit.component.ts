import { Component, OnInit } from '@angular/core';

import { FormService } from '../../shared/form.service';
import { Form } from '../../shared/form.model';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  public form: Form = new Form({primary_color: '#eee', enable: false});

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.formService.getForm(params['id']).subscribe(data => {
          this.form = new Form(data);
        });
      }
    });
  }
}