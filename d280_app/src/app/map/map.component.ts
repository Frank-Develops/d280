import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  ngOnInit() {
    console.log("this calls");
    let countries = document.querySelectorAll('path');
    console.log(countries);
    for (let i = 0; i < countries.length; i++) {
      countries[i].addEventListener('click', event => alert((<HTMLInputElement>event.target).name));
    }
  }

}

