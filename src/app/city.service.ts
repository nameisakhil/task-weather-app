import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=d18e39021d96154be933f8d932a90b3e&query='+ location)
  }
}
