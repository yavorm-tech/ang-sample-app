import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { PersonComponent } from './person/person.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { ServiceItemComponent } from './service/service-list/service-item/service-item.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonEditComponent } from './person/person-list/person-edit/person-edit.component';
import { PersonItemComponent } from './person/person-list/person-item/person-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    PersonComponent,
    ServiceListComponent,
    ServiceItemComponent,
    PersonListComponent,
    PersonEditComponent,
    PersonItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
