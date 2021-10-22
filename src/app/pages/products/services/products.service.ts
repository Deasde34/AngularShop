import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL = 'http://localhost:8080/products';
  constructor(private http: HttpClient)  { }

  getProducts():Observable<Product[]>{
    console.log(this.http.get<Product[]>(this.apiURL));
    return this.http.get<Product[]>(this.apiURL);
  }
}
