import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CofeeListComponent } from './cofee/cofee-list/cofee-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CofeeDetailComponent } from './cofee/cofee-detail/cofee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CofeeListComponent,
    CofeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
