import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shop, ShopDetails, ShopDetailsDTO, ShopDTO } from './models';
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

  /**
   * La risposta del backend non è un array ma un oggetto contenente l'array
   * Ho dichiarato un modello corrispondente alla risposta per estarne il contenuto
   * con la proprietà .data
   */

  async getAllShops(): Promise<Shop[]> {
    const result = await firstValueFrom(this.http.get<ShopDTO>(`${this.baseUrl}/shops`));

    return result.data;
  }

  async getShopByIdWithProducts(shopId: string): Promise<ShopDetails> {
    const result = await firstValueFrom(
      this.http.get<ShopDetailsDTO>(`${this.baseUrl}/shops/${shopId}`),
    );

    return result.data;
  }
}
