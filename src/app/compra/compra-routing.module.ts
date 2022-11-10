import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraPage } from './compra.page';

const routes: Routes = [
  {
    path: '',
    component: CompraPage
  },
  {
    path: 'detalhe-compra',
    loadChildren: () => import('./detalhe-compra/detalhe-compra.module').then( m => m.DetalheCompraPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraPageRoutingModule {}
