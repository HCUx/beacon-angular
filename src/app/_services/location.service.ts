import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Location } from '../model/location';

@Injectable()
export class LocationService {
    constructor(private http: HttpClient) { }

    getAllLocations() {
        return this.http.get<Location[]>(`${environment.apiUrl}/locations`);
    }

    getBeaconLocation(_id: string) {
      return this.http.get<any>(`${environment.apiUrl}/findlocationbeacon/` + _id);
    }

    getUsersLocation(_id: string) {
      return this.http.get<any>(`${environment.apiUrl}/findlocationuser/` + _id);
    }

    getLocationCount() {
      return this.http.get<any>(`${environment.apiUrl}/locationscount`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/locations/` + id);
    }

    register(location: Location) {
        return this.http.post(`${environment.apiUrl}/locations/register`, location);
    }

    update(location: Location) {
        return this.http.put(`${environment.apiUrl}/locations/` + location._id, location);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/locations/` + id);
    }

    addLocationToUser(uid: string, lid: string) {
      return this.http.get(`${environment.apiUrl}/locationaddtouser/` + uid + ':' + lid);
    }

    addLocationToBeacon(bid: string, lid: string) {
      return this.http.put(`${environment.apiUrl}/locationaddtobeacon/` + bid + ':' + lid, null);
    }

    deleteBeaconLocation(bid: string, lid: string) {
      return this.http.delete<any>(`${environment.apiUrl}/beaconlocation/` + bid + ':' + lid);
    }

    deleteUsersLocation(uid: string, lid: string) {
      return this.http.delete<any>(`${environment.apiUrl}/userlocation/` + uid + ':' + lid);
    }
}
