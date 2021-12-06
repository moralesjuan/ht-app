import { Component, OnInit } from '@angular/core';
import { LeaguesService } from '../services/leagues.service';
import { League } from '../interfaces/league.interface';
import { Cup } from '../interfaces/cup.interface';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styles: [
  ]
})
export class OverviewComponent implements OnInit {

  leagues : League[] = [];
  cups : Cup[] = [];

  constructor(private leagueService : LeaguesService) { }

  ngOnInit(): void {
      this.GetLeagues();
      this.GetCups();
  }

  GetLeagues (){
    this.leagueService.getLeagues().subscribe((resp) => {
      this.leagues = resp;
      localStorage.setItem('allLeagues', JSON.stringify( this.leagues ));
    });
  }

  GetCups (){
    this.leagueService.getCups().subscribe((resp) => {
      this.cups = resp;  
    });
  }

}
