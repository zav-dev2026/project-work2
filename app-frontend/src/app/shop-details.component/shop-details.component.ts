import { Component, OnInit } from '@angular/core';
import { ProductDTO, ShopDTO } from '../models';
import { ShopService } from '../shop-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-details',
  standalone: false,
  template: `
    @if (shop) {
      <div class="card" style="width: 18rem;">
        <img src="{{ shop.image_url }}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ shop.name }}</h5>
        </div>
      </div>

      @for (product of productList; track product.id) {
        <div class="col">
          <app-product [product]="product"></app-product>
        </div>
      }
    }
  `,
  styleUrl: './shop-details.component.css',
})
export class ShopDetailsComponent implements OnInit {
  /**
   * Nonostante abbia accesso diretto alla lista dei prodotti
   * perchè proprietà del modello ShopDTO, lo separo
   * per avere valore semantico all'interno del template
   * ed aggiungere chiarezza
   */
  shop: ShopDTO | null = null;
  productList: ProductDTO[] = [];

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
  ) {}

  /**
   * Risolvo la promise tornata dal servizio e ne estraggo il risultato
   * con await e lo assegno alla proprietà della classe, oppure con la sintassi
   * .then((result) => {this.shop = result; this.productList = this.shop.products})
   */
  async ngOnInit(): Promise<void> {
    const shopId = this.activatedRoute.snapshot.paramMap.get('id');

    if (shopId) {
      try {
        const result = await this.shopService.getShopByIdWithProducts(shopId);
        this.shop = result;
        this.productList = this.shop.products;
      } catch {
        throw 'Errore nel recupero del negozio';
      }
    }
  }
}
