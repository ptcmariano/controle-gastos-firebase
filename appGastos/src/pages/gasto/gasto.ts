import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CATEGORIAS } from '../../app/mock-categorias';
import { FORMASPGTO } from '../../app/mock-formaspgto';

@Component({
  selector: 'page-gasto',
  templateUrl: 'gasto.html',
})
export class GastoPage {
  public event = {
    timeDefault: '2017-12-01'
  }
  public categorias = CATEGORIAS;
  public formaspgto = FORMASPGTO;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GastoPage');
  }

}
