import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cup } from '../interfaces/cup.interface';
import { CupDetails } from '../interfaces/cup-details.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CupsService {

  private urlService : string = 'https://localhost:7150/api/Cups';

  constructor( private http : HttpClient ) { }

  // getLeagues () : Observable<League[]>{
  //   const url = `${this.urlService}/Leagues`
  //   return this.http.get<League[]>(url);
  // }

  createCup (cup : Cup) {
    const url = `${this.urlService}`
    return this.http.post<Cup>(url,cup);
  }

  getCupDetails ( cupId : Number) : Observable<CupDetails[]>{
    const url = `${this.urlService}/Details/${cupId}`
    return this.http.get<CupDetails[]>(url);
  }
}
