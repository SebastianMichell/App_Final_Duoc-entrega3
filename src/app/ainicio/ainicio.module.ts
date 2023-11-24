import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AinicioPageRoutingModule } from './ainicio-routing.module';

import { AinicioPage } from './ainicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AinicioPageRoutingModule
  ],
  declarations: [AinicioPage]
})
export class AinicioPageModule {}
