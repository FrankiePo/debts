import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import 'hammerjs';
import {
  MdButtonModule, MdCardModule, MdDialog, MdIconModule, MdListModule, MdToolbarModule, MdDialogModule,
  MdInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FirebaseConfig } from '../environments/firebase.config';
import { AppRoutingModule } from './app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DebtsComponent } from './debts/debts.component';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth.guard';
import { UserService } from './shared/user.service';
import { ContactsService } from './shared/contacts.service';
import { AddContactComponent } from './dialogs/add-contact/add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AnalyticsComponent,
    ContactsComponent,
    DebtsComponent,
    AddContactComponent
  ],
  entryComponents: [
    AddContactComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    // V V V: AngularMaterial
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdListModule,
    MdDialogModule,
    MdInputModule,
  ],
  providers: [AuthService, AuthGuard, UserService, ContactsService, MdDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
