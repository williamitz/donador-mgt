import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { IResponse } from '../interfaces/response.interface';
import { StorageService } from './storage.service';
import { LeagueModel } from '../models/league.model';

const URI = environment.URL_SERVER;

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor( private http: HttpClient, private st: StorageService ) {}

  onGetLeague( page: number, rowsForPage: number, qName: string, qSport: string, showInactive: boolean ) {
    showInactive = showInactive ? false : true;
    let params = `page=${page}&rowsForPage=${rowsForPage}&qName=${qName}&qSport=${qSport}&showInactive=${showInactive}`;
    this.st.onLoadToken();
    return this.http.get<IResponse>( URI + `/League?${params}`, { headers: { 'Authorization': this.st.token }} );
  }

  onAddLeague( body: LeagueModel ) {
    return this.http.post<IResponse>( URI + '/League', body, { headers: { 'Authorization': this.st.token }} );
  }

  onUpdateLeague( body: LeagueModel ) {
    return this.http.put<IResponse>( URI + `/League/${ body.pkLeague }`, body, { headers: { 'Authorization': this.st.token }} );
  }

  onDelLeague( pkLeague: number, status: boolean ) {
    return this.http.delete<IResponse>( URI + `/League/${ pkLeague }/${ status }`, { headers: { 'Authorization': this.st.token }} );
  }

}
