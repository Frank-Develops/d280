import { Component } from '@angular/core';
import { ApicallsService } from "../apicalls.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})

export class InfoComponent {
  // data: any;

  // subscription: Subscription;

  // constructor(private ApicallsService: ApicallsService) { 
  //   this.subscription = this.ApicallsService.data$.subscribe(data => {
  //     this.data = data;
  //     console.log("data " + data);
  //   });
  // }
  
}
