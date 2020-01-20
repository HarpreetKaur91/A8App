import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
  },
  { 
    path: 'leaves',
    loadChildren: () => import('./leaves/leaves.module').then(mod => mod.LeavesModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {path:"typography", component:TypographyComponent},
  {path:"buttons", component:ButtonsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }