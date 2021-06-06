import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { StorageService } from './storage.service';
import { AwardModel } from '../models/award.model';
import { IResponse } from '../interfaces/response.interface';

const URI = environment.URL_SERVER;


@Injectable({
  providedIn: 'root'
})
export class AwardService {

  constructor( private http: HttpClient, private st: StorageService ) {}

  onGetAward( page: number, rowsForPage: number, qName: string, showInactive: boolean ) {
    showInactive = showInactive ? false : true;
    let params = `page=${page}&rowsForPage=${rowsForPage}&qName=${qName}&showInactive=${showInactive}`;
    this.st.onLoadToken();
    return this.http.get<IResponse>( URI + `/Award?${params}`, { headers: { 'Authorization': this.st.token }} );
  }

  onAddAward( body: AwardModel ) {
    return this.http.post<IResponse>( URI + '/Award', body, { headers: { 'Authorization': this.st.token }} );
  }

  onUpdateAward( body: AwardModel ) {
    return this.http.put<IResponse>( URI + `/Award/${ body.pkAward }`, body, { headers: { 'Authorization': this.st.token }} );
  }

  onDelAward( pkAward: number, status: boolean ) {
    return this.http.delete<IResponse>( URI + `/Award/${ pkAward }/${ status }`, { headers: { 'Authorization': this.st.token }} );
  }

}
