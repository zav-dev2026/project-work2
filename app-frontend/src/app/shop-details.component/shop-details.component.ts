import { Component, OnInit } from '@angular/core';
import { Product, ShopDetails } from '../models';
import { ShopService } from '../shop-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-details',
  standalone: false,
  template: `
    <div class="container-fluid px-5 py-4">
      @if (shop) {
        <div class="card shadow-sm mb-4">
          <div class="card-body text-center">
            <h2 class="card-title mb-4">{{ shop.name }}</h2>

            <img
              src="{{ shop.image_url }}"
              class="rounded w-100"
              style="height: 250px; object-fit: cover"
            />
            <div class="text-start">
              <p class="mb-2 text-muted">
                <strong>Indirizzo:</strong>
                {{ shop.address }}
              </p>

              <p class="mb-0 text-muted">
                <strong>Telefono:</strong>
                {{ shop.phone_number }}
              </p>
            </div>
          </div>
        </div>

        <h2 class="mb-3 text-center">Prodotti</h2>
        <div class="d-flex flex-column gap-3">
          @for (product of productList; track product.id) {
            <div class="col">
              <app-product [product]="product"></app-product>
            </div>
          }
        </div>
      }
    </div>
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
  shop: ShopDetails | null = null;
  productList: Product[] = [];

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
