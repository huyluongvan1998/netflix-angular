import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MyLoaderComponent } from './component/my-loader/my-loader.component';
import { BackdropComponent } from './component/backdrop/backdrop.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ButtonComponent } from './component/button/button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MyLoaderComponent,
    BackdropComponent,
    NavbarComponent,
    ButtonComponent,
  ],
  imports: [MatButtonModule],
  exports: [
    CommonModule,
    MyLoaderComponent,
    BackdropComponent,
    ButtonComponent,
    NavbarComponent,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
