import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  valor: number = 0;

  incrementa(){
    this.valor++;
    alert ("Acrescentou mais um produto !");

  }

  decrementa(){
    this.valor--;
    alert ("Diminuiu um produto !");

  }

  constructor() { }

  ngOnInit(): void {
  }

}
