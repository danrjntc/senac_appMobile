import { Component } from '@angular/core';
import { Produto } from './home.model';
import { ProdutosService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  produtos!: Produto[];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.listarCategorias().subscribe( produtos => this.produtos = produtos);
  }

}

