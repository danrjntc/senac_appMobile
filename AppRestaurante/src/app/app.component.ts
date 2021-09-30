import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cardápio', url: '/pages/cardapio', icon: 'newspaper' },
    { title: 'Perfil', url: '/pages/perfil', icon: 'accessibility' },
  ];
  constructor() {}
}
