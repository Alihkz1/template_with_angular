import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public EarnedPrice: number = 0;
  public EarnedAppViews: number = 0;
  public color: ThemePalette = 'accent';
  public mode: ProgressSpinnerMode = 'determinate';

  public row1_cards: any[] = [
    {
      title: 'Active users',
      count: 400,
    },
    {
      title: 'Sold Products',
      count: 350,
    },
  ];

  public row2_cards: any[] = [
    {
      title: 'Sold Product',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      value: 50,
    },
    {
      title: 'Customer Rate',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      value: 80,
    },
  ];

  ngOnInit(): void {
    this.setInterval();
  }

  private setInterval(): void {
    let interval = setInterval(() => {
      this.EarnedPrice += 40;
      this.EarnedAppViews += 50;
      if (this.EarnedPrice === 4000 && this.EarnedAppViews == 5000)
        clearInterval(interval);
    }, 10);
  }
}
