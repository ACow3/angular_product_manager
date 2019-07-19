import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  productId;
  product = {
    "title": "",
    "price": "",
    "image": ""
  }
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.productId = params['id']
    });
    this.getOneProduct()
  }

  getOneProduct() {
    this._httpService.getProduct(this.productId).subscribe(data => {
      console.log("Got one product: ", data)
      this.product = data['product']
    })
  }

  onSubmit() {
    this._httpService.editProduct(this.product).subscribe(data => {
      console.log("Product updated: ", data)
    })
    this._router.navigate(['/products']);
  }

}