import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  ngOnInit() {
    let countries = document.querySelectorAll('path');
    for (let i = 0; i < countries.length; i++) {
      countries[i].addEventListener('click', event => console.log((<HTMLInputElement>event.target).id));
    }
  }

}

