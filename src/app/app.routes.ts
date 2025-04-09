import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'create-ticket',
    loadComponent: () =>
      import(
        './features/create-ticket/pages/create-ticket/create-ticket.component'
      ).then((m) => m.CreateTicketComponent),
  },
  {
    path: 'update-ticket',
    loadComponent: () =>
      import(
        './features/update-ticket/pages/update-ticket/update-ticket.component'
      ).then((m) => m.UpdateTicketComponent),
  },
  {
    path: 'ticket-details',
    loadComponent: () =>
      import(
        './features/ticket-details/pages/ticket-details/ticket-details.component'
      ).then((m) => m.TicketDetailsComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
