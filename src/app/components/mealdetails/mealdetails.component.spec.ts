import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealdetailsComponent } from './mealdetails.component';

describe('MealdetailsComponent', () => {
  let component: MealdetailsComponent;
  let fixture: ComponentFixture<MealdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
