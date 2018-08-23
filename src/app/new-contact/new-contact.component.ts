import { Component, OnInit } from '@angular/core';

import{Contact} from '../../entities/contact';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:Contact=new Contact() ;

  constructor(private contactsService:ContactsService) { }

  ngOnInit() {
  }

  save(){
    this.contactsService.add(this.contact).subscribe(data=>{
      console.log(data);
      this.contact.id=data['id'];
      console.log(this.contact.id);
    });
    console.log(this.contact.id);

  }
}
