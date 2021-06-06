import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { IResponse } from '../interfaces/response.interface';
import { TeamModel } from '../models/team.model';
import { environment } from '../../environments/environment.prod';

const URI = environment.URL_SERVER;

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor( private http: HttpClient, private st: StorageService ) {}

  onGetTeam( page: number, rowsForPage: number, qName: string, qSport: number, showInactive: boolean ) {
    showInactive = showInactive ? false : true;
    let params = `page=${page}&rowsForPage=${rowsForPage}&qName=${qName}&qSport=${qSport}&showInactive=${showInactive}`;
    this.st.onLoadToken();
    return this.http.get<IResponse>( URI + `/Team?${params}`, { headers: { 'Authorization': this.st.token }} );
  }

  onAddTeam( body: TeamModel ) {
    return this.http.post<IResponse>( URI + '/Team', body, { headers: { 'Authorization': this.st.token }} );
  }

  onUpdateTeam( body: TeamModel ) {
    return this.http.put<IResponse>( URI + `/Team/${ body.pkTeam }`, body, { headers: { 'Authorization': this.st.token }} );
  }

  onDelTeam( pkTeam: number, status: boolean ) {
    return this.http.delete<IResponse>( URI + `/Team/${ pkTeam }/${ status }`, { headers: { 'Authorization': this.st.token }} );
  }

}
