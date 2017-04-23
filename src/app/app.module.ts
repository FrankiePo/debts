import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import 'hammerjs';
import { MdButtonModule, MdCardModule, MdIconModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FirebaseConfig } from '../environments/firebase.config';
import { AppRoutingModule } from './app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DebtsComponent } from './debts/debts.component';
import { LoginService } from 'app/shared/login.service';
import { IsLogedInGuard } from 'app/is-loged-in.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AnalyticsComponent,
    ContactsComponent,
    DebtsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    // V V V: AngularMaterial
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
  ],
  providers: [LoginService, IsLogedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
