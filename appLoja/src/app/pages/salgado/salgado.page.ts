import { Component, OnInit } from '@angular/core';
import { Salgado } from './salgado.model';
import { SalgadoService } from './salgado.service';

@Component({
  selector: 'app-salgado',
  templateUrl: './salgado.page.html',
  styleUrls: ['./salgado.page.scss'],
})
export class SalgadoPage implements OnInit {

    Salgado!: Salgado[];
  
    constructor(private listasService: SalgadoService) { }
  
    ngOnInit(): void {
      this.listasService.listarSalgado().subscribe(Salgado => this.Salgado = Salgado);
    }
  
  }