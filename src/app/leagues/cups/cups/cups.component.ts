import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CupDetails } from '../../interfaces/cup-details.interface';
import { CupsService } from '../../services/cups.service';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styles: [
  ]
})
export class CupsComponent implements OnInit {

  cupDetails : CupDetails[] = []

  constructor(private cupsService : CupsService, private activedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        switchMap( ({ cupId }) =>  this.cupsService.getCupDetails(cupId))
      )
      .subscribe( detail => { this.cupDetails = detail; console.log(detail) });
  } 

}
