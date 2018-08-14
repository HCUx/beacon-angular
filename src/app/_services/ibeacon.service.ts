import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import {IBeacon} from '../model/ibeacon';

@Injectable()
export class IbeaconService {
    constructor(private http: HttpClient) { }

    getAllIBeacons() {
        return this.http.get<IBeacon[]>(`${environment.apiUrl}/ibeacons`);
    }

    getBeaconLocation(_id: string) {
      return this.http.get<any>(`${environment.apiUrl}/findbeaconlocation/` + _id);
    }

    getiBeaconCount() {
      return this.http.get<any>(`${environment.apiUrl}/ibeaconscount`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/ibeacons/` + id);
    }

    register(ibeacon: IBeacon) {
        return this.http.post(`${environment.apiUrl}/ibeacons/register`, ibeacon);
    }

    update(ibeacon: IBeacon) {
        return this.http.put(`${environment.apiUrl}/ibeacons/` + ibeacon.uuid, ibeacon);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/ibeacons/` + id);
    }

    addLocationToBeacon(bid: string, lid: string) {
      return this.http.put(`${environment.apiUrl}/locationaddtobeacon/` + bid + ':' + lid, null);
    }

    deleteBeaconLocation(bid: string, lid: string) {
      return this.http.delete<any>(`${environment.apiUrl}/beaconlocation/` + bid + ':' + lid);
    }
}
