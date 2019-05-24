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

import { MatTableModule, MatSortModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EquipasInfoComponent } from './equipas-info/equipas-info.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    LigasComponent,
    EquipasComponent,
    EquipasInfoComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [LigasService, EquipasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
