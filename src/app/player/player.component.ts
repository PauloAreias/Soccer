import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from "./player.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: {}
  id: String

  constructor(private route: ActivatedRoute,
    private PlayerService : PlayerService ) { }

  ngOnInit() {


    this.id="3174";

    this.getCurrentPlayer();

    
  }

  getCurrentPlayer(){

    const jogadores = this.route.snapshot.paramMap.get('id');

    if (jogadores!=null){
      this.id= jogadores;
    }

    this.PlayerService.getPlayers(this.id).subscribe(playerinfo => this.player = playerinfo);
  }

  getSubString(AnoNascimento){

    var ano= AnoNascimento.substr(0,4);

    var today_date = new Date();
    var today_year= today_date.getFullYear();

    var age= today_year - ano;

    return age;

  }
  


}
