import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.page.html',
  styleUrls: ['./indicador.page.scss'],
})
export class IndicadorPage implements OnInit {
  notificacao: number = 8;
  
  constructor() { }

  ngOnInit() {
  }

}
