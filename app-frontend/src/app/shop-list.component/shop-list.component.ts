import { Component, OnInit } from '@angular/core';
import { Shop } from '../models';
import { ShopService } from '../shop-service';

@Component({
  selector: 'app-shop-list',
  standalone: false,
  template: `
    <div class="container py-4">
      @if (shopList.length > 0) {
        <div class="row g-4">
          @for (shop of shopList; track shop.id) {
            <div class="col-12 col-md-6 col-lg-4">
              <app-shop [shop]="shop"></app-shop>
            </div>
          }
        </div>
      }
    </div>
  `,
  styleUrl: './shop-list.component.css',
})
export class ShopListComponent implements OnInit {
  public shopList: Shop[] = [];

  constructor(private shopService: ShopService) {}

  /**
   * Risolvo la promise tornata dal servizio e ne estraggo il risultato
   * con await e lo assegno alla proprietà della classe, oppure con la sintassi
   * .then((result) => this.shopList = result)
   */
  async ngOnInit(): Promise<void> {
    try {
      console.log('ngOnInit');
      const result = await this.shopService.getAllShops();
      this.shopList = result;
    } catch {
      throw 'Errore nel recupero dei negozi';
    }
  }
}
