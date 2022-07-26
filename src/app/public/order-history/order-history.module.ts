import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { OrderHistoryComponent } from './order-history.component';
import { NavReturnModule } from '../../core/shared/components/nav-return/nav-return.module';
import { TabsModule } from 'src/app/core/shared/components/tabs/tabs.module';
import { NavbarModule } from '../../core/shared/components/navbar/navbar.module';


@NgModule({
  declarations: [
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    OrderHistoryRoutingModule,
    NavReturnModule,
    TabsModule,
    NavbarModule
  ]
})
export class OrderHistoryModule { }
