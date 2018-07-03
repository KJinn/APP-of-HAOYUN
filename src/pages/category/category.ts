import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  data:object;
  data3:object;
  number:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data');
    this.data3 = this.navParams.get('data').data[0];
  }

  switchData(i){
    this.number = i;
    this.data3 = this.data.data[this.number];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
