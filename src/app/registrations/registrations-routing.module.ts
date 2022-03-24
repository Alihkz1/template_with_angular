import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationsRouting } from './registrations.routing';
import { RegitrationsMainComponent } from './components/regitrations-main/regitrations-main.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationsRouting,
    children: [
      {
        path: '',
        component: RegitrationsMainComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationsRoutingModule {}
