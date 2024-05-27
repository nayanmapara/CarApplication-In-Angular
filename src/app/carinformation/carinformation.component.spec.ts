import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarinformationComponent } from './carinformation.component';

describe('CarinformationComponent', () => {
  let component: CarinformationComponent;
  let fixture: ComponentFixture<CarinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarinformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
