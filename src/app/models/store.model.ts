import { Trip, TripState } from './trip.model';

export interface StoreState {
  trip: Trip;
}

export const InitialState = {
  trip: TripState,
};
