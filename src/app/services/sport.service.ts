import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { IResponse } from '../interfaces/response.interface';
import { StorageService } from './storage.service';
import { SportModel } from '../models/sport.model';

const URI = environment.URL_SERVER;

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor( private http: HttpClient, private st: StorageService ) {}

  onGetSport( page: number, rowsForPage: number, qName: string, showInactive: boolean ) {
    showInactive = showInactive ? false : true;
    let params = `page=${page}&rowsForPage=${rowsForPage}&qName=${qName}&showInactive=${showInactive}`;
    this.st.onLoadToken();
    return this.http.get<IResponse>( URI + `/Sport?${params}`, { headers: { 'Authorization': this.st.token }} );
  }

  onAddSport( body: SportModel ) {
    return this.http.post<IResponse>( URI + '/Sport', body, { headers: { 'Authorization': this.st.token }} );
  }

  onUpdateSport( body: SportModel ) {
    return this.http.put<IResponse>( URI + `/Sport/${ body.pkSport }`, body, { headers: { 'Authorization': this.st.token }} );
  }

  onDelSport( pkSport: number, status: boolean ) {
    return this.http.delete<IResponse>( URI + `/Sport/${ pkSport }/${ status }`, { headers: { 'Authorization': this.st.token }} );
  }

  onGetSportAll( ) {
    this.st.onLoadToken();
    return this.http.get<IResponse>( URI + `/SportAll`, { headers: { 'Authorization': this.st.token }} );
  }

}
