import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss'],
})
export class FirstFormComponent implements OnInit {
  public value: number = 0;
  public started: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public onLogin(): void {
    this.started = true;
    let interval = setInterval(() => {
      this.value += 5;
      if (this.value === 100) {
        clearInterval(interval);
      }
    }, 50);
  }
}
