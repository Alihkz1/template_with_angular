import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { MaterialModule } from '../shared/modules/material.module';
import { PrimeNgModule } from '../shared/modules/prime-ng.module';
import { PageContentComponent } from './components/page-content/page-content.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'landing-page',
        component: LandingPageComponent,
      },
      {
        path: 'menu',
        component: PageContentComponent,
      },
      {
        path: '**',
        component: LandingPageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ContainerComponent,
    PageContentComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeNgModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class LayoutModule {}
