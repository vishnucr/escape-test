export interface City {
    "id": string,
    "name": string,
    "location"?: {
        "lat": number,
        "lon": number
    },
    "countryName"?: string,
    "iata"?: string,
    "rank"?: number,
    "countryId"?: string,
    "dest"?: string,
    "airports"?: string[],
    "images"?: string[],
    "popularity"?: number,
    "regId"?: string,
    "contId"?: string,
    "subId"?: string,
    "terId"?: string,
    "con"?: number
}