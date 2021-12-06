import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './leagues/overview/overview.component';
import { AddCupComponent } from './leagues/cups/add-cup/add-cup.component';
import { LeaguesComponent } from './leagues/leagues/leagues.component';
import { CupsComponent } from './leagues/cups/cups/cups.component';

const routes: Routes = [
    {
        path: '',
        component: OverviewComponent,
        pathMatch: 'full'
    },
    {
        path: 'addcup',
        component: AddCupComponent
    },
    {
        path: 'leagues/:leagueId',
        component: LeaguesComponent
    },
    {
        path: 'cups/:cupId',
        component: CupsComponent
    },
    {
        path: '**',
        component: OverviewComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export  class AppRoutingModule{}