import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartModule } from './cart/cart.module';
import { FrontendModule } from './frontend/frontend.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./frontend/frontend.module').then(m => FrontendModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => CartModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
