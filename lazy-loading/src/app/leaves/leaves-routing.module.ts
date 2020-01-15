import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyComponent } from './apply/apply.component';
import { LeavesComponent } from './leaves.component';
const routes: Routes = [
  {
    path: '', component: LeavesComponent, children: [
      {
        path: 'apply', component: ApplyComponent
      },
      { 
        path: 'balance',
        loadChildren: () => import('./balance/balance.module').then(mod => mod.BalanceModule) 
      },
      {
        path: '', redirectTo: 'apply', pathMatch: 'full'
      },
      //{ path: '**', component: Page404leavesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
