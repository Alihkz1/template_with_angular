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
    setTimeout(() => {
      this.value = 20;
    }, 200);
    setTimeout(() => {
      this.value = 40;
    }, 400);
    setTimeout(() => {
      this.value = 60;
    }, 600);
    setTimeout(() => {
      this.value = 80;
    }, 800);
    setTimeout(() => {
      this.router.navigate(['/menu']);
    }, 1000);
  }
}
