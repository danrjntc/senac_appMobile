import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocePageRoutingModule } from './doce-routing.module';

import { DocePage } from './doce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocePageRoutingModule
  ],
  declarations: [DocePage]
})
export class DocePageModule {}
