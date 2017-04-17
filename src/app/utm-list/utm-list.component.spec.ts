import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmListComponent } from './utm-list.component';

describe('UtmListComponent', () => {
  let component: UtmListComponent;
  let fixture: ComponentFixture<UtmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
