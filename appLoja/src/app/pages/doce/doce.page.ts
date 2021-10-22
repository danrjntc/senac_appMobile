import { Component, OnInit } from '@angular/core';
import { Doce } from './doce.model';
import { DoceService } from './doce.services';

@Component({
  selector: 'app-doce',
  templateUrl: './doce.page.html',
  styleUrls: ['./doce.page.scss'],
})
export class DocePage implements OnInit {

    Doce!: Doce[];
  
    constructor(private listasService: DoceService) { }
  
    ngOnInit(): void {
      this.listasService.listarDoce().subscribe(Doce => this.Doce = Doce);
    }
  
  }