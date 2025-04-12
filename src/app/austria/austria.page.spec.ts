import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AustriaPage } from './austria.page';

describe('AustriaPage', () => {
  let component: AustriaPage;
  let fixture: ComponentFixture<AustriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AustriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
