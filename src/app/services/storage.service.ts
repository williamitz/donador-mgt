import { Injectable } from '@angular/core';
import { IUserStorage } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public token = '';
  public dataUser: IUserStorage = {
    pkUser: 0,
    userName: '',
    fullName: '',
    email: '',
    phone: '',
    role: '',
    fkInsignia: 0,
    urlInsignia: ''
  };
  public seconds = 0;
  constructor( ) { }

  onSaveCredentials( token: string, data: any ) {
    this.token = token;
    this.dataUser = data;
    localStorage.setItem('token', token);
    localStorage.setItem('dataUser', JSON.stringify( data ));
  }

  onGetItem( name: string, isJson = false ) {
    return isJson ? JSON.parse( localStorage.getItem(name) ) : localStorage.getItem(name);
  }

  onSetItem( name: string, data: any, isJson = false ) {
    localStorage.setItem(name, isJson ? JSON.stringify( data ) : data );
  }

  onLoadToken() {
    this.token = localStorage.getItem('token') || '';
  }

  onLoadData() {

    const data = JSON.parse( localStorage.getItem('dataUser') ) ;
    // console.log('data user', data);
    if (data) {
      this.dataUser = {
        pkUser: data.pkUser,
        userName: data.userName,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        role: data.role,
        fkInsignia: Number( data.fkInsignia || 0 ),
        urlInsignia: data.urlInsignia || 'xd.png'
      };
    }
  }

  onClear() {
    localStorage.removeItem('dataUser');
    localStorage.removeItem('token');

    this.token = '';
    this.dataUser = {
      pkUser: 0,
      userName: '',
      fullName: '',
      email: '',
      phone: '',
      role: '',
      fkInsignia: 0,
      urlInsignia: ''
    };
  }
}
