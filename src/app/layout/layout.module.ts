import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { MaterialModule } from '../../shared/modules/material.module';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [ContainerComponent],
})
export class LayoutModule {}
