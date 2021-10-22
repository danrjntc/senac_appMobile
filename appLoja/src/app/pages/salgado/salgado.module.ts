import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalgadoPageRoutingModule } from './salgado-routing.module';

import { SalgadoPage } from './salgado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalgadoPageRoutingModule
  ],
  declarations: [SalgadoPage]
})
export class SalgadoPageModule {}
