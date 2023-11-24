import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PinicioPage } from './pinicio.page';

describe('PinicioPage', () => {
  let component: PinicioPage;
  let fixture: ComponentFixture<PinicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PinicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
