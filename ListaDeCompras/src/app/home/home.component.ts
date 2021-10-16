import { Component, Input, OnInit } from '@angular/core';
import { Produto } from './produto.model';

@Component({
  selector: 'cin-produtos',
  templateUrl: './home.page.html',
  styleUrls: ['./home.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input()
  produtos!: Produto[];

  constructor() { }

  ngOnInit(): void {
  }

}