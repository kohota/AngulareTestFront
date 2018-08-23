import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
const mesRoutes:Routes = [
{  path:"contacts",component:ContactsComponent },
{  path:"about",component:AboutComponent},
{ path:"",redirectTo:"/about",pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(mesRoutes),HttpModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
