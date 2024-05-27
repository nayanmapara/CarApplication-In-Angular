import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SCarinfoService } from '../s-carinfo.service';
import { Cardetails } from '../cardetails';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `

<article>
      <img class="listing-photo" [src]="routerid?.photo">
      <section>
        <h2>{{routerid?.make}} {{routerid?.model}}</h2>
        <p>Year: {{ routerid?.Year }}</p>
        <p>Available Units: {{ routerid?.availableUnits }}</p>
        <p>Wifi: {{ routerid?.wifi }}</p>
        <p>Insurance: {{ routerid?.insurance }}</p>
      </section>
      
    </article>
    <section class="lsiting-apply">
      <h2 class="section-heading">Apply now to buy the car</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()"> 
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" formControlName="firstname" />

        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" formControlName="lastname" />

        <label for="email">Email</label>
        <input type="email" id="email" formControlName="email" />

        <button type="submit" class="primary">Apply Now</button>
      </form>
    </section>

  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  applyForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('')
  });

  carinfoService = inject(SCarinfoService);
  routerid: Cardetails | undefined;

  constructor() {
    const routerid = Number(this.route.snapshot.params['id']);
    this.routerid = this.carinfoService.getCarinformationById(routerid);
  }

  submitApplication() {
    this.carinfoService.submitApplication(
      this.applyForm.value.firstname ?? '',
      this.applyForm.value.lastname ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
