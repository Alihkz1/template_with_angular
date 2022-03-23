import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherRouting } from './weather.routing';
import { SearchCityComponent } from './components/search-city/search-city.component';
import { ShowCityWeatherComponent } from './components/show-city-weather/show-city-weather.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherRouting,
    children: [
      {
        path: '',
        component: SearchCityComponent,
      },
      {
        path: 'show-city-weather',
        component: ShowCityWeatherComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
