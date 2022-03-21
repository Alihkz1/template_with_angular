import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';

const MODULES = [SidebarModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],
})
export class PrimeNgModule {}
