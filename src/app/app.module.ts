import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterPipe } from './filter.pipe';

import { LoggingService } from './logging.service';
import { DataService } from './data.service';
import { ContactsComponent } from './contacts/contacts.component';
import { InventoryComponent } from './inventory/inventory.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
    ContactsComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'directory', component: DirectoryComponent },
      { path: '', component: HomeComponent },
      { path: 'contacts', component: ContactsComponent},  
      { path: 'inventory', component: InventoryComponent}  
    ])
  ],
  
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
