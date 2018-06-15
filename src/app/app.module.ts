import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { VendorComponent } from './vendor/vendor.component';
import { routingModule } from './app-routing.module';
import { DealerComponent } from './dealer/dealer.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    DealerComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    routingModule,
    MultiSelectModule,
    CalendarModule,
    TableModule,
    DropdownModule, 
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }