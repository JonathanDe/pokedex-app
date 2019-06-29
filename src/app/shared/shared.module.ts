import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [HeaderComponent, SearchPipe],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SearchPipe]
})
export class SharedModule { }
