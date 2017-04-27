import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IContact } from '../../shared/model/contact/icontact';
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
    const {name, phone, email} = this.contact || { name: '', phone: '', email: ''};
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
