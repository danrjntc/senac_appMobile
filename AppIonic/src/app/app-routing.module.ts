import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pages/navegacao',
    loadChildren: () => import('./pages/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'pages/navegacao2',
    loadChildren: () => import('./pages/navegacao2/navegacao2.module').then( m => m.Navegacao2PageModule)
  },
  {
    path: 'pages/botao',
    loadChildren: () => import('./pages/botao/botao.module').then( m => m.BotaoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pages/alerta',
    loadChildren: () => import('./pages/alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'pages/acao',
    loadChildren: () => import('./pages/acao/acao.module').then( m => m.AcaoPageModule)
  },
  {
    path: 'pages/indicador',
    loadChildren: () => import('./pages/indicador/indicador.module').then( m => m.IndicadorPageModule)
  },
  {
    path: 'pages/cartao',
    loadChildren: () => import('./pages/cartao/cartao.module').then( m => m.CartaoPageModule)
  },
  {
    path: 'pages/checkbox',
    loadChildren: () => import('./pages/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'pages/scroll',
    loadChildren: () => import('./pages/scroll/scroll.module').then( m => m.ScrollPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
