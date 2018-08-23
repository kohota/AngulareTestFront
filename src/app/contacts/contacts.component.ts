import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  listContacts:any;
  motRecherche:string;
  currentPage:number=0;
  pages:Array<number>;
  constructor(private contactsService:ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(data=>{
      this.listContacts=data;
      this.pages=new Array(data.totalPages);
    },error=>{
      console.log("error in fetching data from database");
    });
  }

  doSearch(){
    this.contactsService.getResearchedContacts(this.motRecherche,this.currentPage).subscribe(data=>{
      this.listContacts=data;
      this.pages=new Array(data.totalPages);
    },error=>{
      console.log("error fetching data with research option");
    });
  }
  getContatctsRechercher(){
      
      this.doSearch();
    
  }

  goTopage(i:number){
      this.currentPage=i;
      this.doSearch();
  }

}
