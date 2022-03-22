import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { MaterialModule } from '../shared/modules/material.module';
import { PrimeNgModule } from '../shared/modules/prime-ng/prime-ng.module';
import { MainComponent } from './components/container/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: ContainerComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [ContainerComponent, MainComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeNgModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class LayoutModule {}
