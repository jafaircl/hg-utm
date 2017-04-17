import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgencyComponent } from './form-agency.component';

describe('FormAgencyComponent', () => {
  let component: FormAgencyComponent;
  let fixture: ComponentFixture<FormAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
