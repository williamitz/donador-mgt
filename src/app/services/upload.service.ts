import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../interfaces/response.interface';
import { StorageService } from './storage.service';
import { environment } from '../../environments/environment.prod';

const URI = environment.URL_SERVER;

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor( private st: StorageService, private http: HttpClient ) {}

  onUpload( pkSport: number, module: string, file: File ) {
    this.st.onLoadToken();
    const formData = new FormData();
    formData.append('file', file);

    // tslint:disable-next-line: max-line-length
    return this.http.put<IResponse>(URI + `/upload/${ module }/${ pkSport }/`, formData, {headers: { Authorization: this.st.token } });

  }

}
