import { Component, OnInit } from '@angular/core';

const fibonacci = (num: number): number => {
  if(num === 1 || num === 2){
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  name!: string;

  users = [
    {
      name: 'Zakjas',
      number: 2
    },
    {
      name: 'Salazar',
      number: 3
    }
  ]

  constructor() { }

  ngOnInit()
  {
  }

  addUser(){
    this.users.push({
      name: this.name,
      number: 12
    })
    this.name='';
  }

  calcularFib(num: number){
    console.log('fib');
    return fibonacci(num);
  }

}
