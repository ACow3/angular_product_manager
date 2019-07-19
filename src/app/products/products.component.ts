import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productId;
  products: any;
  // products = {
  //   "title": "",
  //   "price": "",
  //   "image": ""
  // }

  constructor(private _httpService: HttpService) { }
  

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    return this._httpService.getProducts().subscribe(data => {
      console.log("Successfully got all products: ", data)
      this.products = data['products']
    })
  }

  deleteOneProduct(id) {
    this._httpService.deleteOneProduct(id).subscribe(data => {
      console.log("Product deleted")
      this.getAllProducts();
    })
  }
}
