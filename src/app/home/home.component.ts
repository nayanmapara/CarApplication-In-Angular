import { Component, inject } from '@angular/core';
import { CarinformationComponent } from '../carinformation/carinformation.component';
import { Cardetails } from '../cardetails';
import { SCarinfoService } from '../s-carinfo.service';

import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarinformationComponent, NgForOf],
  template: `

    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
    <app-carinformation *ngFor="let v_carinformation of CarinformationList" [v_carinformation]="v_carinformation"
    ></app-carinformation>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  CarinformationList: Cardetails[] = [];
  carInformation: SCarinfoService = inject(SCarinfoService);

  constructor() {
    this.CarinformationList = this.carInformation.getAllCarDetails();
  }
}
