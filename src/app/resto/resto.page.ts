import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZomatoDataService } from '../services/zomato-data.service';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.page.html',
  styleUrls: ['./resto.page.scss'],
})
export class RestoPage implements OnInit {

  private id;
  public resto;

  constructor(private route: ActivatedRoute, private zomato: ZomatoDataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getRestaurant();
  }

  getRestaurant() {
    this.zomato.getRestaurant(this.id).subscribe((response) => {
      this.resto = response;
      this.zomato.hideLoader();
    });
  }
}
