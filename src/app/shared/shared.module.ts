import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ContactComponent } from './components/contact/contact.component';

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
