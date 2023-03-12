import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [FormsModule, ReactiveFormsModule, BrowserModule, AppRoutingModule, RouterModule,
    HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
