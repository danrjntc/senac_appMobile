import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.model';
import { protudosService } from './produtos.service';

@Component({
  selector: 'cin-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  produto!: Produto[];
    listarProdutos: any;

  constructor(private produtosService:ProdutosComponent) { }

  ngOnInit(): void {
    this.produtosService.listarProdutos().subscribe( produtos => this.produto = produtos);
  }

}