import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface SubAccount {
  name: string;
  email: string;
  password: string;
  role: string;
}



const ELEMENT_DATA: SubAccount[] = [
  {name: 'subacc1', email: 'subacc1@abc.com', password: 'subacc1', role: 'xyz'},
  {name: 'subacc2', email: 'subacc2@abc.com', password: 'subacc2', role: 'xyz'},
  {name: 'subacc3', email: 'subacc3@abc.com', password: 'subacc3', role: 'xyz'},
  {name: 'subacc4', email: 'subacc4@abc.com', password: 'subacc4', role: 'xyz'},
  {name: 'subacc5', email: 'subacc5@abc.com', password: 'subacc5', role: 'xyz'},
  {name: 'subacc6', email: 'subacc6@abc.com', password: 'subacc6', role: 'xyz'},
  {name: 'subacc7', email: 'subacc7@abc.com', password: 'subacc7', role: 'xyz'},
  {name: 'subacc8', email: 'subacc8@abc.com', password: 'subacc8', role: 'xyz'},
  {name: 'subacc9', email: 'subacc9@abc.com', password: 'subacc9', role: 'xyz'},
];


@Component({
  selector: 'app-sub-accounts',
  templateUrl: './sub-accounts.component.html',
  styleUrls: ['./sub-accounts.component.css']
})
export class SubAccountsComponent implements OnInit {

  displayedColumns: string[] = ['demo-name', 'demo-email', 'demo-password', 'demo-role'];
  dataSource = ELEMENT_DATA;

  hide = true;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
