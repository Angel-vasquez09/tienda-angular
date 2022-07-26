import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle.component';
import { NavReturnModule } from '../../core/shared/components/nav-return/nav-return.module';
import { CounterModule } from 'src/app/core/shared/components/counter/counter.module';


@NgModule({
  declarations: [
    DetalleComponent
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule,
    NavReturnModule,
    CounterModule
  ]
})
export class DetalleModule { }
