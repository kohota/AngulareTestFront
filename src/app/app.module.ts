import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
//import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewContactComponent } from './new-contact/new-contact.component';

const mesRoutes:Routes = [
{  path:"contacts",component:ContactsComponent },
{  path:"about",component:AboutComponent},
{  path:"newContact",component:NewContactComponent},
{ path:"",redirectTo:"/about",pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(mesRoutes),FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
