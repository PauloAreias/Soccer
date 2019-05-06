import { Component, OnInit } from '@angular/core';
import { LigasService } from './ligas.service';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css']
})
export class LigasComponent implements OnInit {

  ligas: {};
  liga : String;
  name: String;

  constructor(private ligaService: LigasService) { }

  ngOnInit() {

    this.ligaService.getCurrentLiga(this.liga);

    this.liga= "PPL";

    this.name ="1ª Liga"

    this.getCurrentLiga(this.liga)

    // this.getCurrentTeams(this.liga)

  }

  SelectLiga(liga, name){
    this.name= name;
    this.liga=liga;
    this.getCurrentLiga(liga);
  }

  // SelectEquipas(liga, name){
  //   this.name= name;
  //   this.liga=liga;
  //   this.getCurrentTeams(liga);
  // }

  getCurrentLiga(liga){

    this.ligaService.getCurrentLiga(liga).subscribe(ligas => this.ligas = ligas);
  }

  // getCurrentTeams(Liga){

  //   this.ligaService.getCurrentTeams(Liga).subscribe(equipas => this.ligas = equipas);
  // }
}
