import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationsRouting } from './registrations.routing';
import { MaterialModule } from 'src/shared/modules/material.module';
import { RegistrationsRoutingModule } from './registrations-routing.module';
import { RegitrationsMainComponent } from './components/regitrations-main/regitrations-main.component';
import { FirstFormComponent } from './components/regitrations-main/first-form/first-form.component';
import { SecondFormComponent } from './components/regitrations-main/second-form/second-form.component';
import { ThirdFormComponent } from './components/regitrations-main/third-form/third-form.component';

@NgModule({
  declarations: [RegistrationsRouting, RegitrationsMainComponent, FirstFormComponent, SecondFormComponent, ThirdFormComponent],
  imports: [CommonModule, RegistrationsRoutingModule, MaterialModule],
})
export class RegistrationsModule {}
