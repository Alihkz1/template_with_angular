import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/shared/enums/routing.enum';
import { WeatherService } from '../../shared/service/weather.service';

@Component({
  selector: 'app-show-city-weather',
  templateUrl: './show-city-weather.component.html',
  styleUrls: ['./show-city-weather.component.scss'],
})
export class ShowCityWeatherComponent implements OnInit {
  name: string = '';
  feelsLike: number = 0;
  humidity: number = 0;
  temp: number = 0;
  max: number = 0;
  min: number = 0;

  constructor(private router: Router, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.onGetCityInfo();
  }

  private onConvertInfo(info: any): object {
    info = {
      ...info,
      feelsLike: Number((info?.feelsLike - 272.25)?.toFixed(0)),
      temp: Number((info?.temp - 272.25)?.toFixed(0)),
      max: Number((info?.temp_max - 272.25)?.toFixed(0)),
      min: Number((info?.temp_min - 272.25)?.toFixed(0)),
    };
    return info;
  }

  private onGetCityInfo(): void {
    this.weatherService.cityInfo.subscribe((info) => {
      if (!info.length) this.router.navigate([ROUTING.WEATHER]);
      info = this.onConvertInfo(info);
      this.name = info?.name;
      this.feelsLike = info?.feelsLike;
      this.humidity = info?.humidity;
      this.temp = info?.temp;
      this.max = info?.max;
      this.min = info?.min;
    });
  }
}
