import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ZomatoDataService } from '../services/zomato-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public results: Array<any> = [];
  public resto;

  constructor(private navCtrl: NavController, private zomato: ZomatoDataService) {}

  searchRestaurant() {
    this.zomato.searchRestaurant(this.resto).subscribe((response) => {
      console.log(response.restaurants);
      this.results = response.restaurants;
      this.zomato.hideLoader();
    }, err => console.log(err));
  }
}
