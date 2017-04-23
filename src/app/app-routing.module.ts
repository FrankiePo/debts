import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DebtsComponent } from './debts/debts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { IsLogedInGuard } from './is-loged-in.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'debts',
    pathMatch: 'full'
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    canActivate: [IsLogedInGuard],
  },
  {
    path: 'debts',
    component: DebtsComponent,
    canActivate: [IsLogedInGuard],
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [IsLogedInGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
