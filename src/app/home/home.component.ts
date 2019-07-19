import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllProducts();
  }

    getAllProducts(){
      this._httpService.getProducts().subscribe( data => {
        console.log("Succesfully got all products", data)
      })
    }
}