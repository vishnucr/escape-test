import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreService } from '@app/store/store.service';
import { City } from '@app/models/city.model';
import { config } from '@app/configs/ngx-select';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.sass'],
})
export class TripPlannerComponent implements OnInit {
  constructor(private _store: StoreService, private _http: HttpClient) {}
  @Output() private _viewMap = new EventEmitter<string>();
  public config = config;
  public origin = null;
  public destination = null;
  public destination_2 = null;
  public cities: City[] = [];
  public START_TRIP = false;
  public ORIGIN_SELECTED = false;
  public DESTINATION_SELECTED = false;
  public DESTINATION_2 = false;
  public TRIP_COMPLETED = false;
  public ROUND_TRIP = false;

  public selectionHandler(e, action, action2) {
    this.tripHandler(action, e);
    action2 && this.tripHandler(action2, e);
  }

  public viewMap() {
    this._viewMap.emit('map');
  }

  public resetTrip() {
    this.START_TRIP = false;
    this.ORIGIN_SELECTED = false;
    this.DESTINATION_SELECTED = false;
    this.DESTINATION_2 = false;
    this.TRIP_COMPLETED = false;
    this.ROUND_TRIP = false;
    this.origin = null;
    this.destination = null;
    this.destination_2 = null;
    this._store.setInit();
  }

  public tripHandler(action, payload = null) {
    switch (action) {
      case 'START_TRIP':
        this.START_TRIP = true;
        break;
      case 'ORIGIN_SELECTED':
        this.ORIGIN_SELECTED = true;
        this._store.setOrigin(payload);
        break;
      case 'DESTINATION_SELECTED':
        this.DESTINATION_SELECTED = true;
        this._store.setDestination(payload);
        break;
      case 'DESTINATION_2':
        this.DESTINATION_2 = true;
        break;
        case 'TRIP_COMPLETED':
          this.TRIP_COMPLETED = true;
          this._store.setDestination(payload);
        break;
      case 'ROUND_TRIP':
        this.ROUND_TRIP = true;
        this._store.setRoundTrip();
        break;
    }
  }

  ngOnInit(): void {
    this._http.get('assets/cities.json').subscribe((res) => {
      Object.keys(res).forEach((city) => this.cities.push(res[city]));
    });
  }
}
