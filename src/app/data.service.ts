import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class DataService{

    private ligas = new BehaviorSubject<string>("PPL");
    currentLiga = this.ligas.asObservable();

    constructor(){}

    changeLiga(league : string){

        this.ligas.next(league);

    }

}