import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './../models/product.model';

@Component({
    selector: 'app-product', //indicamos el tag y la manera en que lo vamos a utilizar
    styleUrls: ['./product.component.scss'],
    templateUrl: './product.component.html',
})
export class ProductComponent
{
    @Input() product: Product;
    @Output() clickedProduct = new EventEmitter<number>();

    viewDetail()
    {
        console.log('viewDetail', this.product.title);
        this.clickedProduct.emit(this.product.id);
    }
}