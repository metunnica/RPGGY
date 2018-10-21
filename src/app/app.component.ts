import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public authUser$ = this.store.select(state => state);
  constructor(private store: Store<AppState>) {}
}
