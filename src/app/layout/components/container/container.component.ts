import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/shared/enums/routing.enum';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  public value: number = 0;
  public darkMode: boolean = false;
  public sideBarBtnsClicked: boolean = false;

  constructor(private router: Router) {}

  @HostBinding('class') get themeMode(): string {
    return this.darkMode ? 'dark-theme' : 'light-theme';
  }

  ngOnInit(): void {
    this.router.navigate([ROUTING.MENU]);
  }

  public showProgressBar(): void {
    this.sideBarBtnsClicked = true;
    let interval = setInterval(() => {
      this.value += 10;
      if (this.value === 100) {
        clearInterval(interval);
      }
    }, 50);
    this.value = 0;
  }
}
