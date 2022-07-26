import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './carrito.component';
import { NavReturnModule } from '../../core/shared/components/nav-return/nav-return.module';
import { CounterModule } from 'src/app/core/shared/components/counter/counter.module';


@NgModule({
  declarations: [
    CarritoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    NavReturnModule,
    CounterModule
  ]
})
export class CarritoModule { }
