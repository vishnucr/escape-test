import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from '@app/app.component';
import { TripPlannerComponent } from "@app/components/trip-planner/trip-planner.component"
import { MapViewComponent } from '@app/components/map-view/map-view.component'

@NgModule({
  declarations: [
    AppComponent,
    TripPlannerComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
