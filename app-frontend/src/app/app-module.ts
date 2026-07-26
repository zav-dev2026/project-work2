import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ShopComponent } from './shop.component/shop.component';
import { ShopListComponent } from './shop-list.component/shop-list.component';
import { ShopDetailsComponent } from './shop-details.component/shop-details.component';
import { ProductComponent } from './product.component/product.component';
import { NavComponent } from './nav-component/nav-component';

@NgModule({
  declarations: [
    App,
    ShopComponent,
    ShopListComponent,
    ShopDetailsComponent,
    ProductComponent,
    NavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
  bootstrap: [App],
})
export class AppModule {}
