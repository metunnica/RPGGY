import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from './../reducers/auth.reducer';
import { LoadAuths } from '../actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {}
  onSubmit(): void {
    this.store.dispatch(new LoadAuths());
  }
}
