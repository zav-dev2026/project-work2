import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopDTO } from './models';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  /**
   *  URL che si potrebbe gestire con un environment
   *  ma dato che non esiste l'url in produzione del backend
   *  per adesso lo lascio cablato qui
   */
  private baseUrl: string = `http://127.0.0.1:8000/api`;

  constructor(private http: HttpClient) {}

  getAllShops(): Promise<ShopDTO[]> {
    return firstValueFrom(this.http.get<ShopDTO[]>(`${this.baseUrl}/shops`));
  }

  getShopByIdWithProducts(shopId: string): Promise<ShopDTO> {
    return firstValueFrom(this.http.get<ShopDTO>(`${this.baseUrl}/shops/${shopId}`));
  }
}
