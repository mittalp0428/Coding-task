import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnroleeModule } from './modules/enrolee/enrolee.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    // FormsModule,
    AppRoutingModule,
    EnroleeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
