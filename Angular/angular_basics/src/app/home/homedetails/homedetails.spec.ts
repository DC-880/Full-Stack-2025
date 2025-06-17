import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetails } from './homedetails';

describe('Homedetails', () => {
  let component: Homedetails;
  let fixture: ComponentFixture<Homedetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homedetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homedetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
