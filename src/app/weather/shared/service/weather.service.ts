import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  cityInfo$ = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  public get cityInfo(): Observable<any> {
    return this.cityInfo$.asObservable();
  }

  public set setCityInfo(info: any) {
    let name = info['name'];
    const { temp, humidity, temp_min, temp_max, feels_like } = info?.main;
    const data = {
      name,
      feelsLike: feels_like,
      temp,
      humidity,
      temp_min,
      temp_max,
    };
    this.cityInfo$.next(data);
  }

  public onGetWeather(cityName: string) {
    let url: string =
      environment.weather_base + cityName + environment.weather_apiKey;
    return this.http.get(url);
  }
}
