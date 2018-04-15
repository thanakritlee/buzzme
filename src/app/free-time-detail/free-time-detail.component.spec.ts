import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTimeDetailComponent } from './free-time-detail.component';

describe('FreeTimeDetailComponent', () => {
  let component: FreeTimeDetailComponent;
  let fixture: ComponentFixture<FreeTimeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTimeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTimeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
