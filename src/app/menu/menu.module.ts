import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MenuRouting } from './menu.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/shared/modules/material.module';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [MenuComponent, LandingPageComponent, MenuRouting],
  imports: [CommonModule, RouterModule, MaterialModule, MenuRoutingModule],
})
export class MenuModule {}
