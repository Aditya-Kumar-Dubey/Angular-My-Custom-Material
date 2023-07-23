import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.crateForm();
  }

  crateForm() {
    this.userForm = new FormGroup({
      email: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      contact: new FormArray([
        new FormGroup({
          type: new FormControl('', Validators.required),
          contact: new FormControl('', Validators.required)
        })
      ])
    });
  }

  getContactControls() {
    return (this.userForm.get('contact') as FormArray).controls;
  }

  addContact() {
    const control = <FormArray>this.userForm.controls['contact'];
    control.push(
      new FormGroup({
        type: new FormControl('', Validators.required),
        contact: new FormControl('', Validators.required)
      })
    );
  }

  removeContact(index: any) {
    const control = <FormArray>this.userForm.controls['contact'];
    control.removeAt(index);
  }

  safeForm() {
    const formValue = this.userForm.value;
    console.log(formValue);
  }

}
