import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/shared/enums/routing.enum';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss'],
})
export class SearchCityComponent implements OnInit {
  public value: number = 0;
  public started: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public onStart() {
    this.started = true;
    let interval = setInterval(() => {
      this.value += 5;
      if (this.value === 100) {
        clearInterval(interval);
        this.router.navigate([ROUTING.SHOW_CITY_WEATHER]);
      }
    }, 50);
  }
}
