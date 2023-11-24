import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },
  {path: 'codigoqr',
    loadChildren: () => import('./codigoqr/codigoqr.module').then( m => m.CodigoqrPageModule)
  },
  {
    path: 'pingreso',
    loadChildren: () => import('./pingreso/pingreso.module').then( m => m.PingresoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'aregistro',
    loadChildren: () => import('./aregistro/aregistro.module').then( m => m.AregistroPageModule)
  },
  {
    path: 'pregistro',
    loadChildren: () => import('./pregistro/pregistro.module').then( m => m.PregistroPageModule)
  },
  {
    path: 'aingreso',
    loadChildren: () => import('./aingreso/aingreso.module').then( m => m.AingresoPageModule)
  },
  {
    path: 'inicios',
    loadChildren: () => import('./inicios/inicios.module').then( m => m.IniciosPageModule)
  },
  {
    path: 'ainicio',
    loadChildren: () => import('./ainicio/ainicio.module').then( m => m.AinicioPageModule)
  },
  {
    path: 'pinicio',
    loadChildren: () => import('./pinicio/pinicio.module').then( m => m.PinicioPageModule)
  },
  {
    path: 'escanearqr',
    loadChildren: () => import('./escanearqr/escanearqr.module').then( m => m.EscanearqrPageModule)
  },
  
  { path: '**', redirectTo: 'error' },   
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
