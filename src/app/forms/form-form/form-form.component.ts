import { Component, OnInit, Input} from '@angular/core';

import { FormService } from '../../shared/form.service';
import { Form } from '../../shared/form.model';
import { MzToastService} from 'ng2-materialize';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-form',
  templateUrl: './form-form.component.html',
  styleUrls: ['./form-form.component.css']
})
export class FormFormComponent implements OnInit {

  @Input() form: Form;

  constructor(
              private formService: FormService,
              private toastService: MzToastService,
              private router: Router
              ) { }

  ngOnInit() { }

  onSubmit(f) {
    if (this.form.id) {
      this.formService.updateForm(this.form.id, this.form).subscribe(data => {
        this.toastService.show('Form updated', 8000, 'green');
      }, error => {
        this.toastService.show('Problem in Form creation', 8000, 'red');
      });
    } else {
      this.formService.createForm(this.form).subscribe(data => {
        this.router.navigate(['/forms/' + data.slug]);
      }, error => {
        this.toastService.show('Problem in Form creation', 8000, 'red');
      });
    }
  }
}