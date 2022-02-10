import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CityService } from "../city.service";


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  public cityService:any;
  // public weatherSearchForm: FormGroup;
  public weatherData: any;
  public city:any = "";
  public didnothaveData = true
  public backgroundClasses:any= {
    "None-background": undefined
  };



  constructor(cityService: CityService){
    this.cityService = cityService
  }

  ngOnInit(): void {
  }


  getWeatherDetails() {
    console.log(this.city)

    this.cityService.getWeather(this.city).subscribe((data: any) => {
      this.weatherData = data;
      this.didnothaveData = this.weatherData?.success === !true
      this.backgroundClasses = {
        "sunny-background": this.weatherData?.current.weather_descriptions[0] === "Sunny",
        "rainy-background": this.weatherData?.current.weather_descriptions[0] === "Rainy" || this.weatherData?.current.weather_descriptions[0] ==="Patchy rain possible",
        "cloudy-background": this.weatherData?.current.weather_descriptions[0] === "Cloudy" ||this.weatherData?.current.weather_descriptions[0] === "Partly cloudy",
        "clear-background":this.weatherData?.current.weather_descriptions[0] === "Clear",
        "mist-background":this.weatherData?.current.weather_descriptions[0] === "Mist" || this.weatherData?.current.weather_descriptions[0] === "Haze"
      }
      console.log(this.backgroundClasses)
    });
  }
}


