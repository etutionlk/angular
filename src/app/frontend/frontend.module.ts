import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopheaderComponent } from './topheader/topheader.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [TopheaderComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TopheaderComponent
  ]
})

export class FrontendModule { }
