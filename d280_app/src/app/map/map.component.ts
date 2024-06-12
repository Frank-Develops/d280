import { Component } from '@angular/core';
import { ApicallsService } from "../apicalls.service"

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  data: any;

  name: string = '';
  capitalCity: string = '';
  region: string = '';
  incomeLevel: string = '';
  latitude: string = '';
  longitude: string = '';


  constructor(private ApicallsService: ApicallsService) { }

  ngOnInit() {
    let countries = document.querySelectorAll('path');
    for (let i = 0; i < countries.length; i++) {
      countries[i].addEventListener('click', event => this.fetchCountry((<HTMLInputElement>event.target).id));
    }
  }

  fetchCountry(country) {
    this.ApicallsService.getCountryData(country).subscribe(response => {
      this.data = response;
      this.name = this.data[1][0].name;
      this.capitalCity = this.data[1][0].capitalCity;
      this.region = this.data[1][0].region.value;
      this.incomeLevel = this.data[1][0].incomeLevel.value
      this.latitude = this.data[1][0].latitude;
      this.longitude = this.data[1][0].longitude;
    });
  }

}



