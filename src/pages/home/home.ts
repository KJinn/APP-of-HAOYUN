import { Component, ViewChild } from '@angular/core';
import { NavController, Slides} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  indexData:any[];
  number:number = 0;

  constructor(
    public navCtrl: NavController,
    private http: HttpClient) {

  }

  @ViewChild(Slides) slides: Slides;

  inCategory(data){
    this.navCtrl.push('CategoryPage',{'data':data});
  }

  configUrl = 'assets/config.json';

  getConfig() {
  }

  ionViewDidLoad() {
    // this.slides.slideTo(2, 500);
    this.http.get('http://120.55.167.52/api/order/services').subscribe((data:{code:number,data:any[]}) => {
      this.indexData = data.data;
    },function (err) {
      console.log(err);
    });
  }
}
