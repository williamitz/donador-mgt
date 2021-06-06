import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { IResponse } from '../interfaces/response.interface';
import { InsigniaModel } from '../models/insignia.model';

const URI = environment.URL_SERVER;

@Injectable({
    providedIn: 'root'
})
export class InsigniaService {

  constructor( private http: HttpClient, private st: StorageService ) {}

  onGetInsignia( page: number, rowsForPage: number, showInactive: boolean ) {
    showInactive = showInactive ? false : true;
    let params = `page=${page}&rowsForPage=${rowsForPage}&showInactive=${showInactive}`;
    this.st.onLoadToken();
    return this.http.get<IResponse>( URI + `/Insignia?${params}`, { headers: { 'Authorization': this.st.token }} );
  }

  onAddInsignia( body: InsigniaModel ) {
    return this.http.post<IResponse>( URI + '/Insignia', body, { headers: { 'Authorization': this.st.token }} );
  }

  onUpdateInsignia( body: InsigniaModel ) {
    return this.http.put<IResponse>( URI + `/Insignia/${ body.pkInsignia }`, body, { headers: { 'Authorization': this.st.token }} );
  }

  onDelInsignia( pkInsignia: number, status: boolean ) {
    return this.http.delete<IResponse>( URI + `/Insignia/${ pkInsignia }/${ status }`, { headers: { 'Authorization': this.st.token }} );
  }

}
