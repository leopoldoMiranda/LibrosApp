import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibrosPage } from './libros.page';

const routes: Routes = [
  {
    path: '',
    component: LibrosPage
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibrosPageRoutingModule {}
