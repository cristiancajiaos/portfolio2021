import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    LoadingComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    ContactComponent
  ]
})
export class SharedModule { }
