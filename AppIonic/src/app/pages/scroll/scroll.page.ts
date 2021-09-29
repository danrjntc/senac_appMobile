import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  spyStart(){
    console.log('O Usuário está mexendo na barra');
  }

  spyEnd(){
    console.log('O Usuário parou');
  }
}
