import { Component } from '@angular/core';

import {Product} from './models/product.model'
interface User{
  name: string;
  age: number;
  isSingle?: boolean;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'hola a esta primera clase';
  name = 'alex';
  rockBandName = '';

  rockBands: string[] = ['acdc', 'heroes del silencio', 'mago'];

  users: User[] = 
  [
    {
      name: 'Zakas',
      age: 25,
      isSingle: false,
      avatar: 'assets/images/desayuno.jpg',
    },
    {
      name: 'Salazar',
      age: 20,
      isSingle: false,
      avatar: 'assets/images/desayuno1.jpg',
    },
  ];

  products: Product[] = 
  [
    {
      id: 1,
      title: 'Producto 1',
      price: 200,
      text: 'super desayuno',
      image: 'assets/images/desayuno.jpg'
    },
    {
      id: 2,
      title: 'Producto 2',
      price: 250,
      text: 'super desayuno',
      image: 'assets/images/desayuno1.jpg'
    },
    {
      id: 3,
      title: 'Producto 3',
      price: 300,
      text: 'super desayuno',
      image: 'assets/images/desayuno2.jpg'
    },
    {
      id: 4,
      title: 'Producto 4',
      price: 350,
      text: 'super desayuno',
      image: 'assets/images/desayuno3.jpg'
    }
  ]

  public changeTitle()
  {
    this.title = 'nuevo titulooo';
  }

  public addRockBand()
  {
    this.rockBands.push(this.rockBandName);
    this.rockBandName = '';
  }

  public vaciar()
  {
    this.rockBands = [];
  }

  public deleteItem(index: number)
  {
    this.rockBands.splice(index, 1);
  }

  public updateItem(index: number)
  {
    this.rockBands[index] = 'se cambio';
  }
}
