import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductListFlexComponent} from './product-list-flex.component';

describe('ProductListFlexComponent', () => {
  let component: ProductListFlexComponent;
  let fixture: ComponentFixture<ProductListFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
