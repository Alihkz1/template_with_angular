import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/shared/modules/material.module';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherRouting } from './weather.routing';
import { SearchCityComponent } from './components/search-city/search-city.component';
import { ShowCityWeatherComponent } from './components/show-city-weather/show-city-weather.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WeatherRouting, SearchCityComponent, ShowCityWeatherComponent],
  imports: [CommonModule, FormsModule, WeatherRoutingModule, MaterialModule],
})
export class WeatherModule {}
