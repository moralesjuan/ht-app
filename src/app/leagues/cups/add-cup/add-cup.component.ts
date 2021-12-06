import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cup } from '../../interfaces/cup.interface';
import { CupsService } from '../../services/cups.service';

@Component({
  selector: 'app-add-cup',
  templateUrl: './add-cup.component.html',
  styles: [
  ]
})
export class AddCupComponent  {

  cupName : string = '';
  cupSize : number = 2;
  cupType : string = '';

  private _cup : Cup = {
    "cupId": 1,
    "name": "TestWebPage3",
    "type": "Random",
    "size": 4
  };

  constructor(private cups : CupsService, public router: Router) { }

  createCup () {

    this._cup.name = this.cupName;
    this._cup.size = this.cupSize;
    this._cup.type = this.cupType;

    this.cups.createCup(this._cup)
      .subscribe(hero => this.router.navigate(['/cups', hero.cupId]));
  }
}
