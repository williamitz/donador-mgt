import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { IResponse } from '../interfaces/response.interface';
import { environment } from '../../environments/environment.prod';
import { TypeLotteryModel } from '../models/typeLottery.model';

const URI = environment.URL_SERVER;

@Injectable({
  providedIn: 'root'
})
export class TypeLotteryService {

  constructor( private http: HttpClient, private st: StorageService ) {}

  onGetTypeLottery( page: number, rowsForPage: number, qName: string, showInactive: boolean ) {
    showInactive = showInactive ? false : true;
    let params = `page=${page}&rowsForPage=${rowsForPage}&qName=${qName}&showInactive=${showInactive}`;
    return this.http.get<IResponse>( URI + `/TypeLottery?${params}`, { headers: { 'Authorization': this.st.token }} );
  }

  onAddTypeLottery( body: TypeLotteryModel ) {
    return this.http.post<IResponse>( URI + '/TypeLottery', body, { headers: { 'Authorization': this.st.token }} );
  }

  onUpdateTypeLottery( body: TypeLotteryModel ) {
    return this.http.put<IResponse>( URI + `/TypeLottery/${ body.pkTypeLottery }`, body, { headers: { 'Authorization': this.st.token }} );
  }

  onDelTypeLottery( pkTypeLottery: number, status: boolean ) {
    return this.http.delete<IResponse>( URI + `/TypeLottery/${ pkTypeLottery }/${ status }`, { headers: { 'Authorization': this.st.token }} );
  }

}
