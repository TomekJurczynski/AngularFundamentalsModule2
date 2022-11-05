import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbuttonComponent } from './cardbutton.component';

describe('CardbuttonComponent', () => {
  let component: CardbuttonComponent;
  let fixture: ComponentFixture<CardbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
