import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteAddComponent } from './qoute-add.component';

describe('QouteAddComponent', () => {
  let component: QouteAddComponent;
  let fixture: ComponentFixture<QouteAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QouteAddComponent]
    });
    fixture = TestBed.createComponent(QouteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
