import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmDetailComponent } from './utm-detail.component';

describe('UtmDetailComponent', () => {
  let component: UtmDetailComponent;
  let fixture: ComponentFixture<UtmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
