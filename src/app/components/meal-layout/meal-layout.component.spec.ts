import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealLayoutComponent } from './meal-layout.component';

describe('MealLayoutComponent', () => {
  let component: MealLayoutComponent;
  let fixture: ComponentFixture<MealLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
