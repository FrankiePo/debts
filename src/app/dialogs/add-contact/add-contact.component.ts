import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IContact } from '../../shared/model/icontact';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactForm: FormGroup;
  contact: IContact;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MdDialogRef<AddContactComponent>,
  ) { }

  ngOnInit() {
    // TODO: simplify
    const {name, phone, email} = this.contact || { name: '', phone: '', email: ''};
    this.contactForm = this.formBuilder.group({
      name: [name, Validators.required],
      phone: [phone, Validators.required],
      email: [email],
    });
  }
  onSubmit({ value, valid }: { value: IContact, valid: boolean }) {
    this.dialogRef.close(value);
  }
}
