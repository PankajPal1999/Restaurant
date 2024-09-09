import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantlistComponent } from './restaurantlist.component';

describe('RestaurantlistComponent', () => {
  let component: RestaurantlistComponent;
  let fixture: ComponentFixture<RestaurantlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
