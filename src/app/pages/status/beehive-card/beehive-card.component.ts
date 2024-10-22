import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../modules/shared.module';
import { Beehive } from '../../../services/beehives/beehive.model';

@Component({
  selector: 'app-beehive-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './beehive-card.component.html',
  styleUrl: './beehive-card.component.css',
})
export class BeehiveCardComponent {
  @Input() beehive?: Beehive;

  hasEvent() {
    const isTempBad =
      this.beehive?.temperature &&
      (this.beehive.temperature < 33 || this.beehive.temperature > 36);
    const isHumidityBad =
      this.beehive?.humidity &&
      (this.beehive.humidity < 50 || this.beehive.humidity > 60);
    return isTempBad || isHumidityBad;
  }

  thresholds = {
    '0': {
      color: 'cyan',
      bgOpacity: 0.2,
    },
    '33': {
      color: 'green',
      bgOpacity: 0.2,
    },
    '36': {
      color: 'red',
      bgOpacity: 0.2,
    },
  };
}
