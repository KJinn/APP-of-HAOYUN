import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAdsPage } from './add-ads';

@NgModule({
  declarations: [
    AddAdsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAdsPage),
  ],
})
export class AddAdsPageModule {}
