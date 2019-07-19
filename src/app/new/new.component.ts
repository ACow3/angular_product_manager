import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newProduct = {
    'title': "",
    'price': "",
    'image': ""
  }
  productError = {
    'title': "",
    'price': "",
    'image': ""
  };

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._httpService.newProduct(this.newProduct).subscribe(data => {
      console.log(data)
      this.productError = {
        'title': "",
        'price': "",
        'image': ""
      };

      if (data['Message'] == "Error") {
        console.log("There was an error creating a new product")
        if (data['error']['errors']['image']) {
          this.productError['image'] = data['error']['errors']['image']['message']
        }
        if (data['error']['errors']['price']) {
          this.productError['price'] = data['error']['errors']['price']['message']
        }
        if (data['error']['errors']['title']) {
          this.productError['title'] = data['error']['errors']['title']['message']
        }
      } else {
        console.log("Success")
        this.newProduct = {
          'title': "",
          'price': "",
          'image': ""
        }
        this.goHome();
      }
    })
  }
  goHome(){
    this._router.navigate(['/products']);
  }
}