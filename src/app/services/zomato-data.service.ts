import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'user-key': environment.clientKey
  })
};

@Injectable({
  providedIn: 'root'
})
export class ZomatoDataService {

  private loader;

  constructor(private httpClient: HttpClient, private loading: LoadingController) { }

  searchRestaurant(value: any): Observable<any> {
    this.showLoader();
    return this.httpClient.get(environment.baseUrl + '/search?q=' + value, httpOptions);
  }

  getRestaurant(restoId: number): Observable<any> {
    this.showLoader();
    return this.httpClient.get(environment.baseUrl + '/restaurant?res_id=' + restoId, httpOptions);
  }

  async showLoader(text?: string) {
    this.loader = await this.loading.create({
      message: text || 'Please wait',
      spinner: 'crescent'
    });

    return await this.loader.present();
  }

  hideLoader() {
    this.loader.dismiss();
  }
}
