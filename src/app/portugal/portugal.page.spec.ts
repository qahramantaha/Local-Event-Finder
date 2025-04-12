import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortugalPage } from './portugal.page';

describe('PortugalPage', () => {
  let component: PortugalPage;
  let fixture: ComponentFixture<PortugalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PortugalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
