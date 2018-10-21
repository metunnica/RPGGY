import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducer';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  headElements = ['Name'];
  public games$ = this.store.select(state => state.game.games);
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
