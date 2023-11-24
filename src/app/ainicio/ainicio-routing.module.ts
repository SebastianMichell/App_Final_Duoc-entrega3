import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AinicioPage } from './ainicio.page';

const routes: Routes = [
  {
    path: '',
    component: AinicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AinicioPageRoutingModule {}
