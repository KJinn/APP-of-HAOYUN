import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MapFile } from  '/src/pages/add-ads/insertJS.js'

/**
 * Generated class for the AddAdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-ads',
  templateUrl: 'add-ads.html',
})
export class AddAdsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: HttpClient,
              private iab: InAppBrowser) {
  }

  openMap() {
    // window.location.href('https://m.amap.com/picker/?key=c4031ebacc93e6512ce8677fcff70935');
    const browser = this.iab.create('https://m.amap.com/picker/?key=c4031ebacc93e6512ce8677fcff70935');
    browser.executeScript({
      file: '/src/pages/add-ads/insertJS.js'
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAdsPage');
  }

}
