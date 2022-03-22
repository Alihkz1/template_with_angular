import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
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
        this.router.navigate(['/menu/menu']);
      }
    }, 50);
  }
}
