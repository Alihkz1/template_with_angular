import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule, FormsModule, RouterModule, MaterialModule],
  exports: [ContainerComponent],
})
export class LayoutModule {}
