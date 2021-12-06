import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { League } from '../interfaces/league.interface';
import { LeaguesService } from '../services/leagues.service';
import { LeagueDetails } from '../interfaces/league-details.interface';

@Component({
  selector: 'app-league',
  templateUrl: './leagues.component.html',
  styles: [
  ]
})
export class LeaguesComponent implements OnInit {
  private _allLeagues : League[] = [];
  private _LeaguesLevel : League[] = [];
  private _lowestLevel : number = 0;
  private _highestLevel : number = 0;
  private _lowestSerie : number = 0;
  private _highestSerie : number = 0;

  public league!: League;
  public leagueDetails: LeagueDetails[] = [];

  constructor(private activedRoute : ActivatedRoute, private leaguesService : LeaguesService, public router: Router){
    this._allLeagues = JSON.parse(localStorage.getItem('allLeagues')!) || [];
  }

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        switchMap( ({ leagueId }) =>  this.leaguesService.getLeagueById(leagueId))
      )
      .subscribe( league => {
        this.league = league;
        this.leaguesService.getLeaguesByLevel(league.level)
          .subscribe( leagues => this._LeaguesLevel = leagues);
        this.leaguesService.getLeagueDetalis(league.leagueId)
          .subscribe( details => this.leagueDetails = details );
      });

    this._lowestLevel = this.getLowestLevel(this._allLeagues);
    this._highestLevel = this.getHighestLevel(this._allLeagues);
  }

  getLowestLevel (array : League[]) : number {
    return array.reduce(
      (max, league) => (league.level > max ? league.level : max), array[0].level
    );
  }

  getHighestLevel (array : League[]) : number {
    return array.reduce((prev, curr) => { return prev.level < curr.level ? prev : curr; }).level;
  }

  getLowestSerie (array : League[]) : number {
    return array.reduce(
      (max, league) => (league.leagueId > max ? league.leagueId : max), array[0].leagueId
    );
  }

  getHighestSerie (array : League[]) : number {
    return array.reduce((prev, curr) => { return prev.leagueId < curr.leagueId ? prev : curr; }).leagueId;
  }

  moveLevel(value : number){
    let newLevel : number = this.league.level + value;
    if (newLevel < this._highestLevel) newLevel = this._lowestLevel;
    if (newLevel > this._lowestLevel) newLevel = this._highestLevel;
    this.leaguesService.getLeaguesByLevel(newLevel)
      .subscribe( result => {
        this.router.navigate(['/leagues', result[0].leagueId]);
      });
  }

  moveSerie (value : number) {
    let newSerie : number = this.league.leagueId + value;

    this._lowestSerie = this.getLowestSerie(this._LeaguesLevel);
    this._highestSerie = this.getHighestSerie(this._LeaguesLevel);

    if (newSerie < this._highestSerie) newSerie = this._lowestSerie;
    if (newSerie > this._lowestSerie) newSerie = this._highestSerie;
    
    this.router.navigate(['/leagues', newSerie]);
  }
}


