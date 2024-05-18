// getPlaces
export interface GetPlacesRequest {
  q: string;
}

export interface GetPlacesResponse {
  type: string;
  features: Feature[];
  attribution: string;
}

interface Feature {
  type: string;
  id: string;
  geometry: Geometry;
  properties: Properties;
}

interface Properties {
  mapbox_id: string;
  feature_type: string;
  full_address: string;
  name: string;
  name_preferred: string;
  coordinates: Coordinates;
  place_formatted: string;
  bbox?: number[];
  context: Context;
}

interface Context {
  region: Region;
  place: Place;
  country: Country;
  locality: Locality;
  street?: Street;
  postcode?: Street;
}

interface Street {
  mapbox_id: string;
  name: string;
}

interface Locality {
  mapbox_id: string;
  name: string;
  wikidata_id: string;
}

interface Country {
  mapbox_id: string;
  name: string;
  wikidata_id: string;
  country_code: string;
  country_code_alpha_3: string;
}

interface Place {
  mapbox_id: string;
  name: string;
  wikidata_id: string;
  short_code: string;
}

interface Region {
  mapbox_id: string;
  name: string;
  wikidata_id: string;
  region_code: string;
  region_code_full: string;
}

interface Coordinates {
  longitude: number;
  latitude: number;
}

interface Geometry {
  type: string;
  coordinates: number[];
}
