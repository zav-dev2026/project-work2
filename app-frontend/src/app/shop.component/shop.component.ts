import { Component, Input } from '@angular/core';
import { Shop } from '../models';

@Component({
  selector: 'app-shop',
  standalone: false,
  template: `
    @if (shop) {
      <div class="card h-100 shadow-sm">
        <img
          src="{{ shop.image_url }}"
          class="card-img-top"
          style="height: 200px; object-fit: cover"
        />
        <div class="card-body d-flex flex-column">
          <a [routerLink]="'/shop/' + shop.id">
            <h5 class="card-title">{{ shop.name }}</h5>
          </a>
          <p class="card-text">Indirizzo: {{ shop.address }}</p>
          <p class="card-text">Telefono: {{ shop.phone_number }}</p>
        </div>
      </div>
    }
  `,
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  @Input() shop: Shop | null = null;
}
