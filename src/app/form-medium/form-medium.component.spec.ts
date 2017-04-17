import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMediumComponent } from './form-medium.component';

describe('FormMediumComponent', () => {
  let component: FormMediumComponent;
  let fixture: ComponentFixture<FormMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
