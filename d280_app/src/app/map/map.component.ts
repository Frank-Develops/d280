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
    // this.ApicallsService.getCountryData().subscribe(response => {
    //   this.data = response;
    //   console.log(this.data);
    // });

    // let countries = document.querySelectorAll('path');
    // for (let i = 0; i < countries.length; i++) {
    //   countries[i].addEventListener('click', event => console.log((<HTMLInputElement>event.target).id));
    // }

    let countries = document.querySelectorAll('path');
    for (let i = 0; i < countries.length; i++) {
      countries[i].addEventListener('click', event => this.fetchCountry((<HTMLInputElement>event.target).id));
    }

  }

  fetchCountry(country) {
    console.log("this clicks " + country)
  }
}



