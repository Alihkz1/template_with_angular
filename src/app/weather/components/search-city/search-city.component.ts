import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/shared/enums/routing.enum';
import { WeatherService } from '../../shared/service/weather.service';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss'],
})
export class SearchCityComponent {
  public value: number = 0;
  public cityName: string = '';
  public started: boolean = false;

  constructor(private router: Router, private weatherService: WeatherService) {}

  public onSearch(): void {
    this.started = true;
    let interval = setInterval(() => {
      this.value += 5;
      if (this.value === 100) {
        clearInterval(interval);
        this.router.navigate([ROUTING.SHOW_CITY_WEATHER]);
      }
    }, 50);
    this.weatherService.onGetWeather(this.cityName).subscribe(
      (cityInfo) => {
        if (!cityInfo) return;
        this.weatherService.setCityInfo = cityInfo;
        this.onSuccess();
      },
      (error) => {
        if (!error) return;
        this.onError();
      }
    );
  }

  private onSuccess(): void {
    this.router.navigate([ROUTING.SHOW_CITY_WEATHER]);
  }

  private onError(): void {
    //show alert code here
  }
}
