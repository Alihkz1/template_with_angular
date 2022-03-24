import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/shared/enums/routing.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public value: number = 0;
  public started: boolean = false;

  public cards: any[] = [
    {
      title: 'Weather Check',
      subTitle: 'check any city weather',
      p: 'in this app you can see live weather of any city all arount the world you want by typing its name',
      route: ROUTING.WEATHER,
      img: '../../../../assets/svg/dog.svg',
      alt: 'weather',
    },
    {
      title: 'Crypto Check',
      subTitle: 'check crypto curreny ',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      img: '../../../../assets/svg/btc.svg',
      alt: 'btc',
    },
    {
      title: 'Currency Check',
      subTitle: 'check currency prices',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      img: '../../../../assets/svg/dollar.svg',
      alt: 'dollar',
    },
  ];

  constructor(private router: Router) {}

  public onRouteTo(route: any) {
    this.started = true;
    let interval = setInterval(() => {
      this.value += 5;
      if (this.value === 100) {
        clearInterval(interval);
        this.router.navigate([route]);
      }
    }, 50);
  }

  ngOnInit(): void {}
}
