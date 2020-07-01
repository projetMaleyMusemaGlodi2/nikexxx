import * as L from 'leaflet';
import { Measure } from '../modules/map/map.component';

export class MapData extends L.Marker{
  data: Measure;

  constructor(latLng: L.LatLngExpression, options?: L.MarkerOptions) {
    super(latLng, options);
    //this.setData(data);
  }
  getData() {
    return this.data;
  }

  setData(data: any) {
    this.data = data;
  }

}
