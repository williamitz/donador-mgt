import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { IResponse } from '../interfaces/response.interface';
import { environment } from '../../environments/environment.prod';

const URI = environment.URL_SERVER;

@Injectable({
    providedIn: 'root'
})
export class GameService {
    
    constructor( private http: HttpClient, private st: StorageService ) {}

    onGetCurrentGlobal( ) {
        // 'Authorization': this.st.token
        return this.http.get<IResponse>( URI + `/CurrentGlobal`, { headers: {}} );
    }

}