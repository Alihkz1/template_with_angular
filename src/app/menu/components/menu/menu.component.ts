import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public cards: any[] = [
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
    },
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
    },
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
    },
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
    },
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
    },
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
    },
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
    },
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
    },
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      p: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
