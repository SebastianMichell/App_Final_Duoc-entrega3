import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AregistroPage } from './aregistro.page';

describe('AregistroPage', () => {
  let component: AregistroPage;
  let fixture: ComponentFixture<AregistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AregistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
