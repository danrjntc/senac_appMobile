import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/pages/home', icon: 'remove' },
    { title: 'Doces', url: '/pages/doce', icon: 'remove' },
    { title: 'Salgados', url: '/pages/salgado', icon: 'remove' },
    { title: 'Carrinho', url: '/pages/carrinho', icon: 'cart' },
    { title: 'Contatos', url: '/pages/contatos', icon: 'call' },
    { title: 'Login', url: '/pages/login', icon: 'person' },
    { title: 'Cadastro', url: '/pages/cadastro', icon: 'person-add' },
    
  ]
  constructor() {}
}
