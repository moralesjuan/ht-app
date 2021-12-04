import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LeagueComponent } from './leagues/league/league.component';
import { LeagueModule } from './leagues/league.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    LeagueModule,
    RouterModule.forRoot([  
      { 
        path: '', 
        component: AppComponent 
      },  
      {   
        path: 'league',          
        component: LeagueComponent,
      }  
    ])
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
