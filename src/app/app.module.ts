import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import 'hammerjs';
import {
  MdButtonModule, MdCardModule, MdDialog, MdIconModule, MdListModule, MdToolbarModule, MdDialogModule,
  MdInputModule, MdSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { FirebaseConfig } from '../environments/firebase.config';
import { AppRoutingModule } from './app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DebtsComponent } from './debts/debts.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { UserService } from './shared/model/user/user.service';
import { ContactsService } from './shared/model/contact/contacts.service';
import { ContactComponent } from './shared/dialogs/contact/contact.component';
import { DebtComponent } from './shared/dialogs/debt/debt.component';
import { DebtsService } from 'app/shared/model/debt/debts.service';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AnalyticsComponent,
    ContactsComponent,
    DebtsComponent,
    ContactComponent,
    DebtComponent,
  ],
  entryComponents: [
    ContactComponent,
    DebtComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FlexLayoutModule,
    // V V V: AngularMaterial
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdListModule,
    MdDialogModule,
    MdInputModule,
    MdSelectModule,
  ],
  providers: [AuthGuard, UserService, ContactsService, DebtsService, MdDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
