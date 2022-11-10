import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheCompraPage } from './detalhe-compra.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheCompraPageRoutingModule {}
