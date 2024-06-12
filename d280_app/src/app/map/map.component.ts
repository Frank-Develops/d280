import { Component } from '@angular/core';
import { ApicallsService } from "../apicalls.service"

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  data: any;

  constructor(private ApicallsService: ApicallsService) { }

  ngOnInit() {
    let countries = document.querySelectorAll('path');
    for (let i = 0; i < countries.length; i++) {
      countries[i].addEventListener('click', event => this.fetchCountry((<HTMLInputElement>event.target).id));
    }

  }

  fetchCountry(country) {
    console.log("this clicks " + country)
    this.ApicallsService.getCountryData(country).subscribe(response => {
      this.data = response;
      console.log(this.data[1][0].name);
      console.log(this.data[1][0].capitalCity);
      console.log(this.data[1][0].region.value);
      console.log(this.data[1][0].incomeLevel.value);
      console.log(this.data[1][0].latitude);
      console.log(this.data[1][0].longitude);
    });
  }

}



