import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { NavReturnModule } from '../../core/shared/components/nav-return/nav-return.module';
import { TabsModule } from '../../core/shared/components/tabs/tabs.module';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NavReturnModule,
    TabsModule
  ]
})
export class SearchModule { }
