import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './shop-list.component/shop-list.component';
import { ShopDetailsComponent } from './shop-details.component/shop-details.component';

const routes: Routes = [
  { path: '', component: ShopListComponent },
  { path: 'shop/:id', component: ShopDetailsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
