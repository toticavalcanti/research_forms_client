import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/form.service';
import { MzToastService} from 'ng2-materialize';

import { Form } from '../../shared/form.model';
import { Question } from '../../shared/question.model';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  private forms: Form[] = [];

  constructor(private formService: FormService, private toastService: MzToastService) { }


  ngOnInit() {
    this.formService.getForms().subscribe(data => {
      for (const form of data){
        this.forms.push(new Form(form));
      }
    });
  }

  deleteForm(form): boolean {
    if (confirm('Your want delete this form?')) {
      this.formService.destroyForm(form.id).subscribe(data => {
        const index = this.forms.indexOf(form);
        this.forms.splice(index, 1);
        this.toastService.show('Form deleted', 8000, 'green');
      }, error => {
        this.toastService.show('Error in delete Form ' + form.title, 8000, 'red');
      });
    }
    return false;
  }
}