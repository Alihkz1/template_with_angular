import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING } from 'src/shared/enums/routing.enum';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  public darkMode: boolean = false;
  constructor(private router: Router) {}

  @HostBinding('class') get themeMode() {
    return this.darkMode ? 'dark-theme' : 'light-theme';
  }
  ngOnInit(): void {
    this.router.navigate([ROUTING.MENU]);
  }
}
