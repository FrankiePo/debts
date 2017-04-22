import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DebtsComponent } from './debts/debts.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'debts'
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'debts',
    component: DebtsComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
