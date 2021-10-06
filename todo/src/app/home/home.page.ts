import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: any[] = [];

  constructor(private altertaControl:AlertController,
              private toastControl: ToastController) {}

  async showAdd(){
    console.log("Botão todo!")
    const alerta = await this.altertaControl.create({
      header:'O que deseja fazer?',
      inputs:[
        {
          name:'task',
          type: 'text',
          placeholder: ' O que deseja fazer'
        }
      ],
      buttons:[
        {
        text:'cancelar',
        role:'cancel',
        handler: () => {
          console.log('Cancelou a operação');
        }
      },{
        text:'Adicionar',
        handler: (form) => {
          this.add(form.task);
        }
      }
      ]
    });
    alerta.present();
  }
  async add(task:string){
      if(task.trim().length < 1){
        const toast = await this.toastControl.create({

          message:'Por favor digite uma tarefa',
          duration:2000,
          position: 'top',
          cssClass:'toast-config'
        });
        toast.present();
        return;
      }
      let taskArray = {name: task, done:false};

      this.tasks.push(taskArray);

      console.log(this.tasks);

  }
}
