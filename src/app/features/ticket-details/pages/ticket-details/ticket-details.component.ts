import { Component } from '@angular/core';
import { TicketOverviewComponent } from '../../components/ticket-overview/ticket-overview.component';
import { TicketTimelineComponent } from '../../components/ticket-timeline/ticket-timeline.component';
import { ProcessTrackerComponent } from '../../components/process-tracker/process-tracker.component';
import { TicketInformationComponent } from '../../components/ticket-information/ticket-information.component';
import { AiInsightsComponent } from '../../components/ai-insights/ai-insights.component';
import { SidebarComponent } from '../../../../core/components/sidebar/sidebar.component';

@Component({
  selector: 'app-ticket-details',
  imports: [
    TicketOverviewComponent,
    TicketTimelineComponent,
    ProcessTrackerComponent,
    TicketInformationComponent,
    AiInsightsComponent,
    SidebarComponent,
  ],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css',
})
export class TicketDetailsComponent {}
