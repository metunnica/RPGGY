import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GameEffects } from './effects/game.effects';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesRoutingModule } from './games-routing.module';
import * as fromGame from './reducers/game.reducer';

@NgModule({
  imports: [CommonModule, GamesRoutingModule, StoreModule.forFeature('game', fromGame.reducer), EffectsModule.forFeature([GameEffects])],
  declarations: [GamesListComponent]
})
export class GamesModule {}
