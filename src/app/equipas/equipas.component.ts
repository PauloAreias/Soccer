import { Component, OnInit } from '@angular/core';
import { EquipasService } from "./equipas.service";
// import { DataService } from "../data.service";

@Component({
  selector: 'app-equipas',
  templateUrl: './equipas.component.html',
  styleUrls: ['./equipas.component.css']
})
export class EquipasComponent implements OnInit {

  equipas: {}
  matches: {}
  liga:String;

  

  constructor(private equipaService: EquipasService) { }



  ngOnInit() {

  

    this.liga= "PPL";

    this.getCurrentTeams(this.liga);

    this.getCurrentMatches(this.liga);
 
  }

  SelectEquipas(liga){
      this.liga=liga;
      this.getCurrentTeams(liga);
      this.getCurrentMatches(this.liga);
  }

  getCurrentTeams(Liga){

      this.equipaService.getCurrentTeams(Liga).subscribe(teams => this.equipas = teams);
    }

    getCurrentMatches(Liga){

      this.equipaService.getCurrentMatches(Liga).subscribe(matches => this.matches = matches);

    }

}
