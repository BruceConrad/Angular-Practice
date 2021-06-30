import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products = [];
  
  status = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Online");
    }, 2000);
  })

  title:string = '';
  service:ProductService;

  constructor(service:ProductService)
  {
    this.service = service;
  }

  ngOnInit()
  {
    this.service.subject.subscribe((data) => {
      console.log('received data');
      this.products = data;
    })
  }

  updateTitle(e:Event)
  {
    this.title = (<HTMLInputElement>e.target).value;
  }

  onAdd()
  {
    this.service.addProduct({title:this.title})
  }
  
  // showAll:boolean = true;
  // signal:string = 'YELLOW';

  // toggle()
  //   {
  //     this.showAll = !this.showAll;
  //   }

  onDelete(title:string)
  {
    this.service.deleteProduct(title);
  }
}
