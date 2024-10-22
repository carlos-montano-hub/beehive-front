import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
@Component({
  selector: 'app-map-component',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.css',
})
export class MapComponentComponent implements OnInit {
  @Input() lat!: number;
  @Input() lng!: number;

  mapOptions!: google.maps.MapOptions;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  bounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };

  ngOnInit() {
    this.mapOptions = {
      center: { lat: this.lat, lng: this.lng },
      zoom: 10,
      disableDefaultUI: true,
      gestureHandling: 'none',
      renderingType: google.maps.RenderingType.VECTOR,
    };
  }
}
