import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public cards: any[] = [
    {
      title: 'Active users',
      count: 400,
    },
    {
      title: 'Sold Products',
      count: 350,
    },
    {
      title: 'Earned Price',
      count: 4000 + '$',
    },
    {
      title: 'Site Views',
      count: '+' + 5000,
    },
  ];

  public cards2: any[] = [
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      value: 50,
    },
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      value: 80,
    },
  ];
  constructor() {}

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';

  ngOnInit(): void {}
}
