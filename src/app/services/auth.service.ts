import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../interfaces/response.interface';
import { environment } from '../../environments/environment.prod';
import { StorageService } from './storage.service';

const URI_API = environment.URL_SERVER;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private st: StorageService) { }

  // <i class="fas fa-globe-europe"></i>
  // onGetMenu() {
  //   this.st.onLoadToken();
  //   return this.http.get<IResponse>( URI_API + `/MenuRole/Get/Web`,  { headers: { Authorization: this.st.token } });
  // }

  // onGetAllowMenu( url: string ): Promise<boolean> {

  //   return new Promise( (resolve) => {

  //     this.st.onLoadToken();
  //     // tslint:disable-next-line: max-line-length
  //     this.http.post<IResponse>( URI_API + `/MenuRole/Allow`, { url },  { headers: { Authorization: this.st.token } }).subscribe( (res) => {
  //       if (!res.ok) {
  //         throw new Error( res.error );
  //       }

  //       resolve( res.showError === 0 ? true : false );
  //     });
  //   });
  // }

  onAuthToken(): Promise<boolean> {
    return new Promise( (resolve) => {
      this.st.onLoadToken();
      this.http.post<IResponse>(URI_API + `/Auth/Token/Web`, {},
       { headers: { Authorization: this.st.token } }).subscribe( (res) => {

          if (!res.ok) {
            resolve(false);
          }
          resolve(true);
       });
    });
  }
}
