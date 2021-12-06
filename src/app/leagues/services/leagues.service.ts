import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { League } from '../interfaces/league.interface';
import { Cup } from '../interfaces/cup.interface';
import { LeagueDetails } from '../interfaces/league-details.interface';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  private urlService : string = 'https://localhost:7150/api';

  constructor( private http : HttpClient ) { }

  getLeagues () : Observable<League[]>{
    const url = `${this.urlService}/Leagues`
    return this.http.get<League[]>(url);
  }
  
  getLeaguesByLevel (level : number) : Observable<League[]>{
    const url = `${this.urlService}/Leagues/Level/${level}`
    return this.http.get<League[]>(url);
  }

  getLeagueById (leagueId : number) : Observable<League>{
    const url = `${this.urlService}/Leagues/${leagueId}`
    return this.http.get<League>(url);
  }

  getCups () : Observable<Cup[]>{
    const url = `${this.urlService}/Cups`
    return this.http.get<Cup[]>(url);
  }

  getLeagueDetalis (leagueId : number) : Observable<LeagueDetails[]>{
    const url = `${this.urlService}/LeagueDetails/${leagueId}`
    return this.http.get<LeagueDetails[]>(url);
  }
}
