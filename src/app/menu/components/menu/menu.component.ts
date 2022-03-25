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
      title: 'Admin Panel',
      subTitle: 'admin panel with all features',
      p: 'admin panel is a great feature to manage your website',
      route: ROUTING.ADMIN,
      img: '../../../../assets/svg/btc.svg',
      alt: 'admin',
    },
    {
      title: 'registration forms',
      subTitle: 'registration is important',
      p: 'with a secure sign-up and sign-in users can enjoy your website',
      route: ROUTING.REGISTRATIONS,
      img: '../../../../assets/svg/dollar.svg',
      alt: 'registration',
    },
  ];

  constructor(private router: Router) {}

  public onRouteTo(route: string): void {
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
