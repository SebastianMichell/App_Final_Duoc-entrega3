import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PregistroPage } from './pregistro.page';

describe('PregistroPage', () => {
  let component: PregistroPage;
  let fixture: ComponentFixture<PregistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PregistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
