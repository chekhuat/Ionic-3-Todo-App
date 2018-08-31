import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public items = [];
  
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
  }

  addItem(){
    
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
          
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
  updateItem(index){
    this.items.splice(this.items.indexOf(index),1);

    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
          
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    
    this.items.push(item);
  
   

  }

  
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item,
      
    });
  }
  delItem(index){
    this.items.splice(this.items.indexOf(index),1);
    
  }

}