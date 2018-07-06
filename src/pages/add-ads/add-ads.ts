import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';


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
  geo: string = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: HttpClient,
              private geolocation: Geolocation,
              public toastCtrl: ToastController) {
  }



  openMap() {
    //key= fdd2fc12bed22729f957bbb28eaf631a
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.longitude  经度
      // resp.coords.latitude   纬度
      this.http.get('http://restapi.amap.com/v3/geocode/regeo',{
        params:{
          key:'fdd2fc12bed22729f957bbb28eaf631a',
          location:resp.coords.longitude + ',' + resp.coords.latitude
        }
      }).subscribe((data:any) => {
        if(data.status == 1){
          this.geo = data.regeocode.formatted_address;
        }else{
          const toast = this.toastCtrl.create({
            message: '获取地理位置失败！',
            duration: 3000
          });
          toast.present();
        }
      },function (err) {
        console.log(err);
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  complete(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAdsPage');
  }

}
