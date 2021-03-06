import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../products/products.service';

@Component({
    selector: 'app-product',
    template: `
        <div>
            <!-- <h4 [ngStyle] = "{'display':showHead()}">Product</h4> -->
            <ng-content></ng-content>
            <h4 [ngClass] = "'highlight classic'" (click) = "deleteItem()">Product</h4>
            
            
            {{product.title | uppercase | shorten:15}}

            {{saleDate | date :'medium' | uppercase}}

            <ng-content select= '[footer]'></ng-content>
        </div>


    `,
    styles: [`
    .highlight {
        color: red;
    }
    .classic{
        background-color: #aff;
    }
    `],
    providers:[]
})
export class ProductComponent
{
    @Input() product;
    @Output() delete = new EventEmitter<string>();
    saleDate = new Date();

    service:ProductService;

    constructor(service:ProductService)
    {
        this.service = service;
    }

    ngOnInit()
    {
        let prod = this.service.getProduct('1');
        console.log(prod);
    }

    toggle = 'none';
    ss = {backgroundColor: '#daa'};

    showHead()
    {
        return 'none';
    }

    deleteItem()
    {
        this.delete.emit(this.product.title);
    }
}