import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTermComponent } from './form-term.component';

describe('FormTermComponent', () => {
  let component: FormTermComponent;
  let fixture: ComponentFixture<FormTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
