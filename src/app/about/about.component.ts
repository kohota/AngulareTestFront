import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infos ={
    adresse:"Kenitra Oulad Oujih",
    Pays:"Maroc",
    telephone:"0628882147"
  }

  constructor() { }

  ngOnInit() {
  }

}
