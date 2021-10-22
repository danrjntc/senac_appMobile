import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocePage } from './doce.page';

const routes: Routes = [
  {
    path: '',
    component: DocePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocePageRoutingModule {}
