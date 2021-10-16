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

}