import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDebt } from '../../model/debt/idebt';
import { MdDialogRef } from '@angular/material';
import { DebtType } from 'app/shared/model/debt/debt-type.enum';
import { IContact } from '../../model/contact/icontact';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {
  debtForm: FormGroup;
  debt: IDebt;
  select: { type: DebtType, name: string }[] = [
    {
      type: DebtType.toMe,
      name: 'He Owes',
    }, {
      type: DebtType.toContact,
      name: 'I Owe',
    }
  ];
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MdDialogRef<DebtComponent>,
  ) { }

  ngOnInit() {
    // TODO: simplify
    const { description, amount, type } = this.debt || { description: '', amount: 0, type: null};
    this.debtForm = this.formBuilder.group({
      description: [description, Validators.required],
      amount: [amount, Validators.required],
      type: [type, Validators.required],
    });
  }
  onSubmit({ value, valid }: { value: IDebt, valid: boolean }) {
    if (valid) {
      this.dialogRef.close(value);
    }
  }
  closeForm() {
    this.dialogRef.close(null);
  }

}


