import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { NavbarModule } from '../../core/shared/components/navbar/navbar.module';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ListRecommendedComponent } from './components/list-recommended/list-recommended.component';
import { CardComponent } from './components/card/card.component';
import { ListPromoComponent } from './components/list-promo/list-promo.component';
import { CardPromoComponent } from './components/card-promo/card-promo.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListProductoComponent } from './components/list-producto/list-producto.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { TabsModule } from '../../core/shared/components/tabs/tabs.module';


@NgModule({
  declarations: [
    HomeComponent,
    PromocionesComponent,
    ListRecommendedComponent,
    ListPromoComponent,
    ListCategoryComponent,
    ListProductoComponent,
    MenuComponent,
    CardProductoComponent,
    CardCategoryComponent,
    CardPromoComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    TabsModule
  ]
})
export class HomeModule { }
