import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../_models/City';
import { AlertifyService } from '../_services/alertify.service';
import { CityTownService } from '../_services/cityTown.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-CityTown',
  templateUrl: './CityTown.component.html',
  styleUrls: ['./CityTown.component.css']
})
export class CityTownComponent implements OnInit {
cities: City[];
  constructor(private route: ActivatedRoute, private cityServices: CityTownService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.cities = data['cities'];
    });
  }

}
