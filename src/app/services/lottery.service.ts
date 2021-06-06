import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { StorageService } from './storage.service';
import { IResponse } from '../interfaces/response.interface';
import { LotteryModel } from '../models/lottery.model';

const URI = environment.URL_SERVER;

@Injectable({
  providedIn: 'root'
})
export class LotteryService {

  constructor( private st: StorageService, private http: HttpClient ) {}

  onGetTypeLotteryAll() {
    return this.http.get<IResponse>( URI + '/TypeLotteryAll', { headers: { 'Authorization': this.st.token }} );
  }

  onGetAwardAll() {
    return this.http.get<IResponse>( URI + '/AwardAll', { headers: { 'Authorization': this.st.token }} );
  }

  onGetEventAll( fkSport: number ) {
    return this.http.get<IResponse>( URI + `/EventAll?fkSport=${ fkSport }`, { headers: { 'Authorization': this.st.token }} );
  }

  onGetEventByLottery( pkLottery: number ) {
    return this.http.get<IResponse>( URI + `/EventByLottery?id=${ pkLottery }`, { headers: { 'Authorization': this.st.token }} );
  }

  onGetAwardByLottery( pkLottery: number ) {
    return this.http.get<IResponse>( URI + `/AwardByLottery?id=${ pkLottery }`, { headers: { 'Authorization': this.st.token }} );
  }

  

  onAddLottery( body: LotteryModel ) {
    return this.http.post<IResponse>( URI + `/Lottery`, body, { headers: { 'Authorization': this.st.token }} );
  }

  onGetLottery( page: number, rowsForPage: number, qName: string, qSport: number, showInactive: boolean ) {
    showInactive = showInactive ? false : true;
    let params = `page=${page}&rowsForPage=${rowsForPage}&qName=${qName}&qSport=${qSport}&showInactive=${showInactive}`;
    this.st.onLoadToken();
    return this.http.get<IResponse>( URI + `/Lottery?${params}`, { headers: { 'Authorization': this.st.token }} );
  }

  onGetLotteryByCode( code: string ) {
    return this.http.get<IResponse>( URI + `/Lottery/${code}`, { headers: { 'Authorization': this.st.token }} );
  }

}
