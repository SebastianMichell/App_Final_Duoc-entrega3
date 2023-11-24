import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscanearqrPage } from './escanearqr.page';

describe('HomePage', () => {
  let component: EscanearqrPage;
  let fixture: ComponentFixture<EscanearqrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscanearqrPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscanearqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
