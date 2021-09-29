import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertControl: AlertController) { }

  ngOnInit() {
  }

  async alert(){
    const alert = await this.alertControl.create({
      header: 'Alert',
      subHeader: 'Subtítulo',
      message: 'Olá usuário',
      buttons: ['OK']
    });

    alert.present();
  }

  async multiple(){
    const alert = await this.alertControl.create({
      header: 'Alert',
      subHeader: 'Múltiplos Botões',
      message: 'Alert com botões de opção',
      buttons: ['OK', 'Cancelar']
    });

    alert.present();
  }  

  async action(){
    const alert = await this.alertControl.create({
      header: 'Confirm',
      message: 'Responda <strong>a essa pergunta</strong>!',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: (arg) => {
          console.log('Foi pressionado o botão cancelar')
        }
      },{
        text: 'OK',
        handler: () => {
          console.log('Foi pressionado o botão OK')
        }
      }]
    });

    alert.present();
  }    
}
