import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { IResponse } from '../interfaces/response.interface';
import { environment } from '../../environments/environment.prod';
import { EventModel } from '../models/event.model';

const URI = environment.URL_SERVER;

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor( private st: StorageService, private http: HttpClient ) {}

  onGetNationaltityAll() {
    return this.http.get<IResponse>( URI + '/Nationality', { headers: { 'Authorization': this.st.token }} );
  }

  onGetTeamAll( fkSport: number ) {
    return this.http.get<IResponse>( URI + `/TeamAll?fkSport=${ fkSport }`, { headers: { 'Authorization': this.st.token }} );
  }

  onGetLeagueAll( fkSport: number ) {
    return this.http.get<IResponse>( URI + `/LeagueAll?fkSport=${ fkSport }`, { headers: { 'Authorization': this.st.token }} );
  }

  onAddEvent( body: EventModel ) {
    return this.http.post<IResponse>( URI + `/Event`, body, { headers: { 'Authorization': this.st.token }} );
  }

  onUpdateEvent( body: EventModel ) {
    return this.http.put<IResponse>( URI + `/Event/${ body.pkEvent }`, body, { headers: { 'Authorization': this.st.token }} );
  }

  onGetEvent( page: number, rowsForPage: number, qName: string, qSport: string, qCountry: string, showInactive: boolean ) {
    showInactive = showInactive ? false : true;
    let params = `page=${page}&rowsForPage=${rowsForPage}&qName=${qName}&qSport=${qSport}&qCountry=${qCountry}&showInactive=${showInactive}`;
    return this.http.get<IResponse>( URI + `/Event?${ params }`, { headers: { 'Authorization': this.st.token }} );
  }

  onDelEvent( pk: number, status: boolean ) {
    return this.http.delete<IResponse>( URI + `/Event/${ pk }/${ status }`, { headers: { 'Authorization': this.st.token }} );
  }

}
