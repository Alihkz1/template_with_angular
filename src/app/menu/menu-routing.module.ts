import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuRouting } from './menu.routing';
import { MenuComponent } from './components/menu/menu.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: MenuRouting,
    children: [
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'landing',
        component: LandingPageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
