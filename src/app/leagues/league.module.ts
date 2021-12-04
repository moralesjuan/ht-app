import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueComponent } from './league/league.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    LeagueComponent
  ],
  exports: [
    LeagueComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class LeagueModule { }
