import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pages/home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pages/doce',
    loadChildren: () => import('./pages/doce/doce.module').then( m => m.DocePageModule)
  },
  {
    path: 'pages/salgado',
    loadChildren: () => import('./pages/salgado/salgado.module').then( m => m.SalgadoPageModule)
  },
  {
    path: 'pages/carrinho',
    loadChildren: () => import('./pages/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'pages/login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pages/cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'pages/contatos',
    loadChildren: () => import('./pages/contatos/contatos.module').then( m => m.ContatosPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
