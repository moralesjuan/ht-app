import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LeaguesComponent } from './leagues/leagues.component';
import { OverviewComponent } from './overview/overview.component';
import { CupsComponent } from './cups/cups/cups.component';
import { AddCupComponent } from './cups/add-cup/add-cup.component';

@NgModule({
  declarations: [
    LeaguesComponent,
    OverviewComponent,
    CupsComponent,
    AddCupComponent
  ],
  exports: [
    LeaguesComponent,
    OverviewComponent,
    CupsComponent,
    AddCupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LeaguesModule { }
