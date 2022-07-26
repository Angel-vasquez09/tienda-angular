import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavReturnComponent } from './nav-return.component';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    LogoModule
  ],
  declarations: [NavReturnComponent],
  exports: [NavReturnComponent]
})
export class NavReturnModule { }
