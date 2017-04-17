import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSourceComponent } from './form-source.component';

describe('FormSourceComponent', () => {
  let component: FormSourceComponent;
  let fixture: ComponentFixture<FormSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
