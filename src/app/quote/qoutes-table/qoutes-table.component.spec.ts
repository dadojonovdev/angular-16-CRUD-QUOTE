import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutesTableComponent } from './qoutes-table.component';

describe('QoutesTableComponent', () => {
  let component: QoutesTableComponent;
  let fixture: ComponentFixture<QoutesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QoutesTableComponent]
    });
    fixture = TestBed.createComponent(QoutesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
