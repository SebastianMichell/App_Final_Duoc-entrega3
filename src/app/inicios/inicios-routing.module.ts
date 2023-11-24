import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciosPage } from './inicios.page';

const routes: Routes = [
  {
    path: '',
    component: IniciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciosPageRoutingModule {}
