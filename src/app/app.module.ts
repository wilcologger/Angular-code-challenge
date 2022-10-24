import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { VehicleTypeComponent } from './vehicle-type-select/vehicle-type-select.component';
import { VehicleImageComponent } from './vehicle-image/vehicle-image.component';

@NgModule({
  declarations: [AppComponent, VehicleTypeComponent, VehicleImageComponent],
  imports: [BrowserModule, FormsModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
