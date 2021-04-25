import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { ReduxDevToolsExtension } from '@codewithdan/observable-store-extensions';
import { StoreState, InitialState } from '@app/models/store.model';

ObservableStore.globalSettings = {
  trackStateHistory: true,
};
ObservableStore.addExtension(new ReduxDevToolsExtension());

@Injectable({
  providedIn: 'root',
})
export class StoreService extends ObservableStore<StoreState> {
  constructor() {
    super({ trackStateHistory: true });
    this.setState(InitialState, 'INIT_STATE');
  }

  get() {
    const store = this.getState();
    return store;
  }
  setInit(){
    this.setState(InitialState, 'INIT_STATE');
  }

  setOrigin(origin) {
    const { trip } = this.getState();
    const _trip = { ...trip, origin };
    this.setState({ trip: _trip }, 'ADDED_ORIGIN');
  }
  setDestination(destination) {
    const { trip } = this.getState();
    const _destination = [...new Set([...trip.destinations, destination])];
    const _trip = { ...trip, destinations: _destination };
    this.setState({ trip: _trip }, 'ADDED_DESTINATION');
  }
  setRoundTrip() {
    const { trip } = this.getState();
    const _trip = { ...trip, isRoundTrip: true };
    this.setState({ trip: _trip }, 'SET_ROUNDTRIP');
  }
}
