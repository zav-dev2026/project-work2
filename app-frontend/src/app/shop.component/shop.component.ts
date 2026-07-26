import { Component, Input } from '@angular/core';
import { ShopDTO } from '../models';

@Component({
  selector: 'app-shop',
  standalone: false,
  template: `
    @if (shop) {
      <div class="card" style="width: 18rem;">
        <img src="{{ shop.image_url }}" class="card-img-top" />
        <div class="card-body">
          <a [routerLink]="'/shop/' + shop.id">
            <h5 class="card-title">{{ shop.name }}</h5>
          </a>
        </div>
      </div>
    }
  `,
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  @Input() shop: ShopDTO | null = null;
}
