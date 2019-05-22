import { Component, OnInit } from '@angular/core';
import { EquipasInfoService } from "./equipas-info.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipas-info',
  templateUrl: './equipas-info.component.html',
  styleUrls: ['./equipas-info.component.css']
})
export class EquipasInfoComponent implements OnInit {

  info: {}
  id: String

  constructor(private route: ActivatedRoute,
    private InfoService: EquipasInfoService) { }

  ngOnInit() {

    this.id="503";

    this.getCurrentInfo();
  }

  getCurrentInfo(){

    const team = this.route.snapshot.paramMap.get('id');

    if (team!=null){
      this.id= team;
    }

    this.InfoService.getInfoTeams(this.id).subscribe(infoteam => this.info = infoteam);
  }


  


}
