import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username : any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'suttitle',
      buttons: ['OK']
    });
    alert.present();
  }

  loginUser() {

    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      this.navCtrl.push(ChatPage, {
        username : this.username
      });
    } else {
        alert('Invalid');
    }
  }

}
