import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRouting } from './admin.routing';
import { MaterialModule } from 'src/shared/modules/material.module';

@NgModule({
  declarations: [AdminRouting, DashboardComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
