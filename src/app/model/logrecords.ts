import {Location} from './location';

export class LogRecords {

  constructor(
    public _id: string,
    public name: string,
    public surname: string,
    public username: string,
    public email: string,
    public uuid: string,
    public lid: string,
    public type: string,
    public created_at: string,
    public userlocation: Location
  ) { }
}
