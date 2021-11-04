import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from '@customer/list/list.component';
import { DetailsComponent } from '@customer/details/details.component';

const routes: Routes = [
  {
    path: 'customer',
    component: ListComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: 'customer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
