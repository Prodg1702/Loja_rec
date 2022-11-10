import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheCompraPageRoutingModule } from './detalhe-compra-routing.module';

import { DetalheCompraPage } from './detalhe-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheCompraPageRoutingModule
  ],
  declarations: [DetalheCompraPage]
})
export class DetalheCompraPageModule {}
