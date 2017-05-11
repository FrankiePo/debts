import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IContact } from '../../model/contact/icontact';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contact: IContact;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MdDialogRef<ContactComponent>,
  ) { }

  ngOnInit() {
    // TODO: simplify
    const contact = this.contact || { name: '', phone: '', email: ''};
    const {name, phone, email} = contact;
    this.contactForm = this.formBuilder.group({
      name: [name, Validators.required],
      phone: [phone, Validators.required],
      email: [email],
    });
  }
  onSubmit({ value, valid }: { value: IContact, valid: boolean }) {
    if (valid) {
      this.dialogRef.close(value);
    }
  }
  closeForm() {
    this.dialogRef.close(null);
  }
}
