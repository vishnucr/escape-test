import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Trip } from '@app/models/trip.model';
import { MapService } from '@app/services/map.service';
import { StoreService } from '@app/store/store.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.sass'],
})
export class MapViewComponent implements OnInit {
  @Output() private _viewTrip = new EventEmitter<string>();
  constructor(private map: MapService, private _store: StoreService) {}
  public trip: Trip;
  public goBack() {
    this._viewTrip.emit('trip');
  }

  ngOnInit(): void {
    const { trip } = this._store.get();
    this.trip = trip;
    const origin = this.trip.origin;
    this.map.buildMap(origin?.location?.lon, origin?.location?.lat);
  }
}
