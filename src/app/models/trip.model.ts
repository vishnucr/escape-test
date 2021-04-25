export interface Trip {
  origin: string;
  destinations: string[];
  isRoundTrip: boolean;
}

export const TripState =  {
  origin:null,
  destinations:[],
  isRoundTrip:false
}
