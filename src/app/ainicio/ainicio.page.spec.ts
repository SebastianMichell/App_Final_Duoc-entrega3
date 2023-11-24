import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AinicioPage } from './ainicio.page';

describe('AinicioPage', () => {
  let component: AinicioPage;
  let fixture: ComponentFixture<AinicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AinicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
