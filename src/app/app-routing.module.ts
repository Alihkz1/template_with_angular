import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING } from 'src/shared/enums/routing.enum';
import { ContainerComponent } from './layout/components/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layout/layout.module').then((m) => m.LayoutModule),
      },
      {
        path: ROUTING.ADMIN,
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: ROUTING.MENU,
        loadChildren: () =>
          import('./menu/menu.module').then((m) => m.MenuModule),
      },
      {
        path: ROUTING.WEATHER,
        loadChildren: () =>
          import('./weather/weather.module').then((m) => m.WeatherModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
