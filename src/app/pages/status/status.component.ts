import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { beehivesTestData } from '../../services/beehives/beehive.model';
import { BeehiveCardComponent } from './beehive-card/beehive-card.component';

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [SharedModule, BeehiveCardComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css',
})
export class StatusComponent {
  beehives = beehivesTestData;
}
