import { Component, OnInit} from '@angular/core';
import { LigasService } from './ligas.service';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css']
})
export class LigasComponent implements OnInit {

  
  ligas: {};
  standings:{};
  liga : String;
  name: String;

  constructor(private ligaService: LigasService) { }

  ngOnInit() {

    this.ligaService.getCurrentLiga(this.liga);

    this.liga= "PPL";

    // this.name ="1ª Liga"

    this.getCurrentLiga(this.liga)

    this.getCurrentStandings(this.liga);

    

  }

  SelectLiga(liga){
    // this.name= name;
    this.liga=liga;
    this.getCurrentLiga(liga);
    this.getCurrentStandings(liga);
  }

  

  getCurrentLiga(liga){

    this.ligaService.getCurrentLiga(liga).subscribe(league => this.ligas = league);
  }



getCurrentStandings(Liga){

    this.ligaService.getCurrentStandings(Liga).subscribe(teams => this.standings = teams);
  }


 
}
