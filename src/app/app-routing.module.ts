import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LigasComponent} from "./ligas/ligas.component"
import { EquipasComponent } from "./equipas/equipas.component";
import { EquipasInfoComponent } from "./equipas-info/equipas-info.component";

const routes: Routes = [
  {path: '', redirectTo: '/ligas', pathMatch: 'full'},
  {path: 'ligas', component: LigasComponent},
  {path: 'equipas', component: EquipasComponent},
  {path: 'equipas-info/:id', component: EquipasInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
