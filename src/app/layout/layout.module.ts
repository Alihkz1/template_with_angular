import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { LayoutRouting } from './layout.routing';
import { HeaderComponent } from './components/container/header/header.component';
import { MaterialModule } from '../shared/modules/material.module';
import { PrimeNgModule } from '../shared/modules/prime-ng/prime-ng.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutRouting,
    children: [
      {
        path: '',
        component: ContainerComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [LayoutRouting, ContainerComponent, HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeNgModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class LayoutModule {}
