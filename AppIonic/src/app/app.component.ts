import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home'},
    { title: 'Exemplo de Navegação', url: '/pages/navegacao', icon: 'compass'},
    { title: 'Segunda tela de Navegação', url: '/pages/navegacao2', icon: 'compass'},    
    { title: 'Botões', url: '/pages/botao', icon: 'toggle'},
    { title: 'Alerta', url: '/pages/alerta', icon: 'alert-circle'},
    { title: 'Lista de Ações', url: 'pages/acao', icon: 'filter-circle'},
    { title: 'Indicador de Notificações', url: 'pages/indicador', icon: 'notifications-circle'},
    { title: 'Cartões', url: 'pages/cartao', icon: 'reader'},
    { title: 'Check-box', url: 'pages/checkbox', icon: 'checkbox'},
    { title: 'Spy Scroll', url: 'pages/scroll', icon: 'eye'}
  ];
  constructor() {}
}
