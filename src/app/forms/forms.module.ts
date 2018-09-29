import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormListComponent, FormEditComponent]
})
export class FormsModule { }
