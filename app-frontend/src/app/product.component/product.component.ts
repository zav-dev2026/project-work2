import { Component, Input } from '@angular/core';
import { Product } from '../models';

@Component({
  selector: 'app-product',
  standalone: false,
  template: `
    @if (product) {
      <div class="card shadow-sm">
        <div class="row g-0 align-items-center">
          <div class="col-md-3">
            <img src="{{ product.image_url }}" class="img-fluid rounded-start w-100" />
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start">
                <h5 class="card-title mb-2">{{ product.name }}</h5>

                <span class="badge bg-primary fs-6">{{ product.price }} €</span>
              </div>
              <p class="card-text text-muted mb-0">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: Product | null = null;
}
