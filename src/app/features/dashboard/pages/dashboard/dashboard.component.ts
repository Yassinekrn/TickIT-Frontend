import { Component } from '@angular/core';
import { KpisMetricsComponent } from '../../components/kpis-metrics/kpis-metrics.component';
import { TicketListComponent } from '../../components/ticket-list/ticket-list.component';
import { AiRecommendationsComponent } from '../../components/ai-recommendations/ai-recommendations.component';
import { SidebarComponent } from '../../../../core/components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    KpisMetricsComponent,
    TicketListComponent,
    AiRecommendationsComponent,
    SidebarComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
