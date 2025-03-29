import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form1',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {

myform=new FormGroup({
  name: new FormControl("",[ Validators.required, Validators.minLength(3)]),
  email:new FormControl("",[Validators.required,Validators.email])
});


onSubmit() {
  if (this.myform.valid) {
    console.log(this.myform.value);
    // Handle form submission
  }
}
}
