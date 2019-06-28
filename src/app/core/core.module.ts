import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpApiService } from './http-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpApiService]
})
export class CoreModule { }
