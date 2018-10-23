import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { HomeComponent } from './home/home.component';
import { PodcastComponent } from './podcast/podcast.component';

@NgModule({
  imports: [
    CommonModule,
    StaticRoutingModule
  ],
  declarations: [HomeComponent, PodcastComponent]
})
export class StaticModule { }
