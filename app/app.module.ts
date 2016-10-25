import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DataService } from './services/dataService';
import  { MyItemComponent } from './myItem.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent , MyItemComponent],
  providers: [DataService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
