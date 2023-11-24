import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciosPageRoutingModule } from './inicios-routing.module';

import { IniciosPage } from './inicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciosPageRoutingModule
  ],
  declarations: [IniciosPage]
})
export class IniciosPageModule {}
