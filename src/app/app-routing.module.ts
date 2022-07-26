import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./public/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./public/detalle/detalle.module').then(m => m.DetalleModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./public/carrito/carrito.module').then(m => m.CarritoModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./public/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./public/order-history/order-history.module').then(m => m.OrderHistoryModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
