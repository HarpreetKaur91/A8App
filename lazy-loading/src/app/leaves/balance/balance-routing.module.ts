import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceComponent } from './balance.component';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';
const routes: Routes = [
  {
    path: '', component: BalanceComponent, children: [
      
      {
        path: 'casual', component: CasualComponent
      },
      {
        path: 'earned', component: EarnedComponent
      },
      // {
      //   path: '', redirectTo: 'casual', pathMatch: 'full'
      // },
      //{ path: '**', component:  Page404balanceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceRoutingModule { }
