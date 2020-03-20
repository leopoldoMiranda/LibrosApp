import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibrosPage } from './libros.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: LibrosPage
//   },
//   {
//     path: 'buscar',
//     loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
//   },
//   {
//     path: 'categorias',
//     loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
//   },
//   {
//     path: 'sugeridos',
//     loadChildren: () => import('./sugeridos/sugeridos.module').then( m => m.SugeridosPageModule)
//   }
// ];
const routes: Routes = [
  {
    path: '',
    component: LibrosPage,
    children:[
      {
        path: 'sugeridos',
        children:[
          { path:'', loadChildren: () => import('./sugeridos/sugeridos.module').then( m => m.SugeridosPageModule)},
          {
            path:':libroId',loadChildren: () => import('./sugeridos/sugerido-detalle/sugerido-detalle.module').then( m => m.SugeridoDetallePageModule)} ,
        ]
      },
      {
        path:'categorias',
        children:[{
          path:'',
          loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
        },
        {
          path:'new',
          loadChildren:()=>import('./categorias/nueva-categoria/nueva-categoria.module').then(m=>m.NuevaCategoriaPageModule)
        }
      ]
      }
    ]
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibrosPageRoutingModule {}
