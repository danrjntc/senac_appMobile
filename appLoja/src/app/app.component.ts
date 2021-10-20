import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bolos', url: '/home/Inbox', icon: 'remove' },
    { title: 'Cupcakes', url: '/home/Outbox', icon: 'remove' },
    { title: 'Salgados', url: '/home/Favorites', icon: 'remove' },
    { title: 'Carrinho', url: '/home/Favorites', icon: 'cart' },
    { title: 'Login', url: '/home/Favorites', icon: 'person' },
    { title: 'Cadastro', url: '/home/Favorites', icon: 'person-add' },
    { title: 'Contatos', url: '/home/Favorites', icon: 'call' },
  ]
  constructor() {}
}
