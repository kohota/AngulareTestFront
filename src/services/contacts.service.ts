import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
  })

export class ContactsService{
   
    constructor(public http :Http){

    }

    getContacts(){
        return this.http.get("http://localhost:8080/Contacts").
        pipe(map(data=>data.json()));
        
    }

    getResearchedContacts(motRecherche:string,page:number){
        return this.http.get("http://localhost:8080/chercherContactParNom?mc="+motRecherche+"&size=2&page="+page).
        pipe(map(data=>data.json()));
    }
}