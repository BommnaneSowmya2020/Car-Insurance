import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarComponent } from "./car/car.component";
import { CustomerComponent } from "./customer/customer.component";
import { HomeComponent } from "./home/home.component";
import { InsuranceComponent } from "./insurance/insurance.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CustomerComponent,
    HomeComponent,
    LoginComponent,
    InsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
