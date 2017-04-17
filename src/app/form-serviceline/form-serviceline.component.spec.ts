import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServicelineComponent } from './form-serviceline.component';

describe('FormServicelineComponent', () => {
  let component: FormServicelineComponent;
  let fixture: ComponentFixture<FormServicelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormServicelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormServicelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
