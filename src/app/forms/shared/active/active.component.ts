import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../../../shared/form.service';
import { MzToastService} from 'ng2-materialize';
import { Form } from '../../../shared/form.model';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  @Input() form: Form;

  constructor(private formService: FormService, private toastService: MzToastService) { }

  ngOnInit() {
  }

  toggleEnable() {
    this.formService.updateForm(this.form.id, this.form).subscribe(data => {
      if (this.form.enable) {
        this.toastService.show('Form enabled', 8000, 'green');
      } else {
        this.toastService.show('Form disabled', 8000, 'green');
      }
    }, error => {
      if (this.form.enable) {
        this.toastService.show('Error in enable Form', 8000, 'red');
      } else {
        this.toastService.show('Error in disable Form', 8000, 'red');
      }
    });
  }
}