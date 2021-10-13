import { Component } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: any[] = [];

  constructor(private alertaControl: AlertController,
              private toastControl: ToastController,
              private actionControl: ActionSheetController) {

    let taskJson = localStorage.getItem('taskDB');

    if(taskJson != null) {
      this.tasks = JSON.parse(taskJson);
    }
  }

  async showAdd() {
    const alerta = await this.alertaControl.create({
      header: 'O que deseja fazer ?',
      inputs: [
        {
          name: 'task',
          type: 'text',
          placeholder: 'O que deseja fazer'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelou a operação');
          }
        },{
          text: 'Adicionar',
          handler: (form) => {
            this.add(form.task);
          }
        }
      ]
    });

    alerta.present();
  }

  async add(task: string){
    if(task.trim().length < 1){
      const toast = await this.toastControl.create({
        message: 'Você precisa digitar uma tarefa!!!',
        duration: 2000,
        position: 'top',
        cssClass: 'toast-config'
      });

      toast.present();
      return;
    }

    let taskArray = {name: task, done: false};
    this.tasks.push(taskArray);

    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('taskDB', JSON.stringify(this.tasks));
  }

  async openActions(item: any) {
    const actionSheet = await this.actionControl.create({
      header: 'O que fazer?',
      buttons: [{
          text: item.done ? 'Desmarcar' : 'Marcar',
          icon: item.done ? 'radio-button-off' : 'checkmark-circle',
          handler: () => {
            item.done = !item.done;
            this.updateLocalStorage();
          }
        },{
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Desistiu da opção');
          }
        }
      ]
    });

    actionSheet.present();
  }

  delete(task: any) {
    this.tasks = this.tasks.filter(taskArray => task != taskArray); 
    this.updateLocalStorage();
  }
}
