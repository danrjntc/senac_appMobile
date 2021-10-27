import { Component, OnInit } from '@angular/core';
import { Novidades } from './home.model';
import { NovidadesService } from './home.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  Novidades!: Novidades[];
  
  constructor(private listasService: NovidadesService) { }

  ngOnInit(): void {
    this.listasService.listarNovidades().subscribe(Novidades => this.Novidades = Novidades);
  }

}