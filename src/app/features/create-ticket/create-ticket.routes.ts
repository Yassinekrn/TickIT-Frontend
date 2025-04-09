import { Routes } from '@angular/router';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: CreateTicketComponent,
  },
];
