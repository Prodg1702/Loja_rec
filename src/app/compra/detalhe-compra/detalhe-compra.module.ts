import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheCompraPageRoutingModule } from './detalhe-compra-routing.module';

import { DetalheCompraPage } from './detalhe-compra.page';

import { SimpleMaskModule } from 'ngx-ion-simple-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DetalheCompraPageRoutingModule,
    SimpleMaskModule
  ],
  declarations: [DetalheCompraPage]
})
export class DetalheCompraPageModule {}
