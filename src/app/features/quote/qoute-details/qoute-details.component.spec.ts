import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteDetailsComponent } from './qoute-details.component';

describe('QouteDetailsComponent', () => {
  let component: QouteDetailsComponent;
  let fixture: ComponentFixture<QouteDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QouteDetailsComponent]
    });
    fixture = TestBed.createComponent(QouteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
