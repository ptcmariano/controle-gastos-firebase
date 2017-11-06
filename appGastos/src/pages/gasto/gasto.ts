import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-gasto',
  templateUrl: 'gasto.html',
})
export class GastoPage {
  public event = {
    timeDefault: '2017-12-01'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GastoPage');
  }

}
