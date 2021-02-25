import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagnifyingGlassComponent } from './icons/magnifying-glass/magnifying-glass.component';

@NgModule({
  declarations: [
    MagnifyingGlassComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MagnifyingGlassComponent
  ]
})
export class SharedModule { }
