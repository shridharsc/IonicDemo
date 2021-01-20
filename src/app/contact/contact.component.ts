import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms'; 
import { emit } from 'process';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form : FormGroup
  errorStartDate:boolean = false
  array:any = [];
  Firstname: any;
  Lastname:any;
  Address:any;
  Number:any;
  Email:any;
  pinCode:any;
  editIndex:any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      address: ['',Validators.required],
      number: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      pincode: ['',Validators.required]
    })
  }

  get f() { return this.form.controls; }

  formSubmit() {
    this.errorStartDate = true;

    if (this.form.invalid) {
      return;
    }
    
    console.log(this.form.value)
    this.array.push(this.form.value)
  }

  delete(i) {
    this.array.splice(i,1)
    console.log(this.array)
  }

  edit(email) {
    console.log(email)
    console.log(this.array)
    let index = this.array.findIndex(x => x.email === email);
    console.log(index)
    this.editIndex = index
    this.array.forEach((element , i) => {
      if(i === index) {
        this.Firstname = element.firstName;
        this.Lastname = element.lastName;
        this.Address = element.address
        this.Number =   element.number
        this.Email =  element.email
        this.pinCode = element.pincode
      }
    });
  }

  reset() {
      this.form.patchValue({
          firstName : null,
          lastName : null,
          address : null,
          number : null,
          email : null,
          pincode : null
      })
  }

  Editform() {
    console.log(this.editIndex)
    this.array.forEach((element , i) => {
        if(i === this.editIndex) {
          element.firstName = this.form.controls.firstName.value;
         element.lastName  = this.form.controls.lastName.value;
          element.address = this.form.controls.address.value;
           element.number = this.form.controls.number.value;
          element.email= this.form.controls.email.value;
          element.pincode = this.form.controls.pincode.value;
        }
      });
      console.log(this.array)
      this.errorStartDate = false;
  }
  
}
