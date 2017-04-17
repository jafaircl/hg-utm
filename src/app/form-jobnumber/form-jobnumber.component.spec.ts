import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJobnumberComponent } from './form-jobnumber.component';

describe('FormJobnumberComponent', () => {
  let component: FormJobnumberComponent;
  let fixture: ComponentFixture<FormJobnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJobnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJobnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
