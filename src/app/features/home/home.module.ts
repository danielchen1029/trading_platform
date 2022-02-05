import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { Route, RouterModule } from '@angular/router';
import { SharesModule } from 'src/app/shares/shares.module';

const router: Route[] = [
  {
    path: '',
    component: IndexComponent,
  },
];

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, RouterModule.forChild(router), SharesModule],
})
export class HomeModule {}
