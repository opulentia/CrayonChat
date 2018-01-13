import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  @ViewChild(Content) content: Content

  private username : any;
  private message : any;
  private subscription : any;
  private messages : any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {

    let chatPage = this;
    this.username = this.navParams.get('username');

    let tempMessages = [];
    this.db.list('/chat').valueChanges().subscribe( data => {
      data.map( target => {
        tempMessages.push(target);
      });

      console.log("-----------------------");
      console.log(JSON.stringify(data));
      console.log("-----------------------");

      chatPage.messages = tempMessages;
      chatPage.content.scrollToBottom(500);
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad");

  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
    this.content.scrollToBottom();
  }

  sendMessage() {
    let chatPage = this;
    this.db.list('/chat').push({
      username : chatPage.username,
      message: chatPage.message
    });
    chatPage.message = '';
  }



}
