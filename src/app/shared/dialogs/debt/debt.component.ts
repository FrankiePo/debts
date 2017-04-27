import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDebt } from '../../model/debt/idebt';
import { MdDialogRef } from '@angular/material';
import { DebtType } from 'app/shared/model/debt/debt-type.enum';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {
  debtForm: FormGroup;
  debt: IDebt;
  select: { type: DebtType, name: string }[];
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MdDialogRef<DebtComponent>,
  ) {
    this.select = [
      {
        type: DebtType.toMe,
        name: "I Owe",
      }, {
        type: DebtType.toContact,
        name: "He Owes",
      }
    ];
  }

  ngOnInit() {
    // TODO: simplify
    const { description, amount, type } = this.debt || { description: '', amount: null, type: null};
    this.debtForm = this.formBuilder.group({
      description: [description, Validators.required],
      amount: [amount, Validators.required],
      type: [type, Validators.required],
    });
  }
  onSubmit({ value, valid }: { value: IDebt, valid: boolean }) {
    console.log("----form", value, valid);
    if (valid) {
      this.dialogRef.close(value);
    }
  }
  closeForm() {
    this.dialogRef.close(null);
  }

}

