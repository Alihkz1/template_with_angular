import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRouting } from './admin.routing';

@NgModule({
  declarations: [AdminRouting, DashboardComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AdminRoutingModule],
})
export class AdminModule {}
