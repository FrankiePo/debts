import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DebtsComponent } from './debts/debts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'debts',
    pathMatch: 'full'
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'debts',
    component: DebtsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
