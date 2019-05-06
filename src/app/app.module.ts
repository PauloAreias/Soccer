import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LigasComponent } from './ligas/ligas.component';
import { LigasService } from "./ligas/ligas.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EquipasComponent } from './equipas/equipas.component';
import { EquipasService } from "./equipas/equipas.service";

@NgModule({
  declarations: [
    AppComponent,
    LigasComponent,
    EquipasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [LigasService, EquipasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
