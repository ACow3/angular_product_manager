import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('/api/products')
  }

  newProduct(product){
    return this._http.post('/api/products/new', product)
  }

  deleteOneProduct(id){
    return this._http.delete('/api/products/'+id)    // Alternate way of concatening id: (`/products/${id}`)
  }

  getProduct(id){
    return this._http.get('/api/products/'+id)     // Alternate way of concatening id: (`/products/${id}`)
  }

  editProduct(product){
    return this._http.put(`/api/products/${product._id}`, product)    // vs. ('/products/'+id, product) <-- Original concatenation
  }
}