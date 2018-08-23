import { Injectable } from "@angular/core";
import {HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import{Contact} from '../entities/contact';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable({
    providedIn: 'root',
  })


export class ContactsService{
   
    constructor(public http :HttpClient){

    }

    getContacts(){
        return this.http.get("http://localhost:8080/Contacts").pipe(
            catchError(this.handleError)
          );
        
        //.        pipe(map(data=>data.json()))
    }

    add (contact: Contact): Observable<Contact> {
        return this.http.post<Contact>("http://localhost:8080/SaveContact", contact, httpOptions)
          .pipe(
            catchError(this.handleError)
          );
    }


    getResearchedContacts(motRecherche:string,page:number){
        return this.http.get("http://localhost:8080/chercherContactParNom?mc="+motRecherche+"&size=2&page="+page);
        //.        pipe(map(data=>data.json()));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }

      
}