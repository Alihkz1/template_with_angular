import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { MaterialModule } from '../shared/modules/material.module';
import { PrimeNgModule } from '../shared/modules/prime-ng.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [ContainerComponent, LandingPageComponent, MenuComponent],
  imports: [CommonModule, MaterialModule, PrimeNgModule, LayoutRoutingModule],
  exports: [LayoutRoutingModule],
})
export class LayoutModule {}
