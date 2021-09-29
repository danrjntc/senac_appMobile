import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  meses: any[] = [{nome: 'Janeiro', marcado: true},
                  {nome: 'Fevereiro', marcado: true},
                  {nome: 'Março', marcado: true},                  
                  {nome: 'Abril', marcado: false},                  
                  {nome: 'Maio', marcado: true},                  
                  {nome: 'Junho', marcado: false},                  
                  {nome: 'Julho', marcado: false},                  
                  {nome: 'Agosto', marcado: true},                  
                  {nome: 'Setembro', marcado: true},                  
                  {nome: 'Outubro', marcado: true},                  
                  {nome: 'Novembro', marcado: true},                  
                  {nome: 'Dezembro', marcado: false}                  
                 ];

  constructor() { }

  ngOnInit() {
  }

  listar(){
    this.meses.forEach(function(value){
      console.log(`${value.nome} (${value.marcado})`);

    });
    
  }
}
