import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

const primengModules = [InputNumberModule, ButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...primengModules],
})
export class PrimengModule {}
