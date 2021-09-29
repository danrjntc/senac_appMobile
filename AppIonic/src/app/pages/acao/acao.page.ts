import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss'],
})
export class AcaoPage implements OnInit {

  constructor(private actionControl: ActionSheetController) { }

  ngOnInit() {
  }

  async showAction(){
    const actionSheet = await this.actionControl.create({
      header: 'Fotos',
      buttons: [{
          text: 'Apagar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Escolheu Apagar');
          }
        },{
          text: 'Compartilhar',
          icon: 'share',
          handler: () => {
            console.log('Escolheu Compartilhar');
          }
        },{
          text: 'Exibir',
          icon: 'chevron-forward-circle',
          handler: () => {
            console.log('Escolheu Exibir');
          }
        },{
          text: 'Favoritar',
          icon: 'heart',
          handler: () => {
            console.log('Escolheu Favoritar');
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancelou a operação"');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
