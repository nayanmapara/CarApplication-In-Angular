import { Component, Input } from '@angular/core';
import { Cardetails } from '../cardetails';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-carinformation',
  standalone: true,
  imports: [RouterModule, DetailsComponent],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="v_carinformation.photo" alt="image of a car"/>
      <h2 class="listing-heading">{{ v_carinformation.make }}</h2>
      <p class="listing-location">{{ v_carinformation.model }} , {{ v_carinformation.Year }}</p>
      <p class="listing-price">
      <a [routerLink]="['/details',v_carinformation.id]">Learn More</a></p>
    </section>
  `,
  styleUrl: './carinformation.component.css'
})
export class CarinformationComponent {
  @Input() v_carinformation!: Cardetails;
}
