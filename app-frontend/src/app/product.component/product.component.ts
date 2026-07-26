import { Component, Input } from '@angular/core';
import { ProductDTO } from '../models';

@Component({
  selector: 'app-product',
  standalone: false,
  template: `
    @if (product) {
      <div class="card" style="width: 18rem;">
        <img src="{{ product.image_url }}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
        </div>
      </div>
    }
  `,
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: ProductDTO | null = null;
}
