import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GermanyPage } from './germany.page';

describe('GermanyPage', () => {
  let component: GermanyPage;
  let fixture: ComponentFixture<GermanyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
