import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CarouselModule } from 'primeng/carousel';

const primengModules = [InputNumberModule, ButtonModule, CarouselModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...primengModules],
})
export class PrimengModule {}
