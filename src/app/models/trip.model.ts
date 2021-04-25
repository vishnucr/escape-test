import {City} from '@app/models/city.model'

export interface Trip {
  origin: City;
  destinations: City[];
  isRoundTrip: boolean;
}

export const TripState =  {
  origin:null,
  destinations:[],
  isRoundTrip:false
}
