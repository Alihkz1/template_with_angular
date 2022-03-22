import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss'],
})
export class PageContentComponent implements OnInit {
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

  public showResponse(event: any) {}
}
