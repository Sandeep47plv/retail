import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VendorComponent } from './vendor/vendor.component';
import { DealerComponent } from './dealer/dealer.component';

const routes: Routes = [
  { path: "dealer", component: DealerComponent },
  { path: "", redirectTo: "/dealer", pathMatch: "full" },
  { path: "vendor", component: VendorComponent },
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

