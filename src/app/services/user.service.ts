import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/response.interface';
import { UserModel } from '../models/user.model';
import { LoginModel } from '../models/login.model';
import { SingUserModel } from '../models/singin-user.model';

const URI = environment.URL_SERVER;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  onGetTypeDoc() {
    return this.http.get<IResponse>( URI + '/typeDoc', { headers: {}} );
  }

  onAddUser( body: UserModel ) {
    return this.http.post<IResponse>( URI + '/user', body, { headers: {}} );
  }

  onGetUser( page: number, rowsForPage:  number, qName = '', qEmail = '', qUser = '', qRole = '', showInactive: boolean) {
    showInactive = showInactive ? false : true;
    let params = `page=${page}&rowsForPage=${rowsForPage}&qName=${qName}&qEmail=${qEmail}&qUser=${qUser}&qRole=${qRole}&showInactive=${showInactive}`;
    return this.http.get<IResponse>( URI + `/user?${params}`, { headers: {}} );
  }

  onLoginAdmin( body: LoginModel ) {
    return this.http.post<IResponse>( URI + '/loginAdmin', body, { headers: {}} );
  }

  onLogin( body: LoginModel ) {
    return this.http.post<IResponse>( URI + '/Login', body, { headers: {}} );
  }

  onGetInsigniaAll() {
    return this.http.get<IResponse>( URI + '/InsigniaAll', { headers: {}} );
  }

  onSinginUser( body: SingUserModel ) {
    return this.http.post<IResponse>( URI + '/Singin', body, { headers: {}} );
  }

}
