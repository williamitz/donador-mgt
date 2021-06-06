import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { IUserSocket } from '../interfaces/user-socket.interface';
import { StorageService } from './storage.service';
import { IResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private userSocket: IUserSocket = {
    pkUser: 0,
    userName: '',
    role: '',
  };
  public statusSocket = false;
  constructor( private io: Socket, private st: StorageService ) { }

  onStatusSocket() {
    this.st.onLoadData();
    this.io.on('connect', () => {

      if (!this.statusSocket) {

        // this.ui.onShowAlertTimer('success', 'Conectado', 'Vuelves a tener conexión con el servidor.', 2000);
      }

      this.statusSocket = true;

      // console.log('conectado a socket');

      // console.error('Se perdió conexión con el servidor');

      this.onSingUserSocket().then( (res) => {
          console.log('Usuario condigurado en socket', res);
      }).catch( (e) => {
        console.error(e);
      });

      if (this.st.dataUser.pkUser === 0) {
        this.onSingUserEmptySocket().then( (res) => {
          console.log('Usuario empty configurado en socket', res);
        }).catch( (e) => {
          console.error(e);
        });
      }

    });

    this.io.on('disconnect', () => {
      this.statusSocket = false;

      // this.ui.onShowAlertTimer('error', 'Sin conexión', 'Sin conexión con el servidor, por favor revise su conexión a internet o espere respuesta del servidor.');
      // console.error('Se perdió conexión con el servidor');
    });
  }

  // tslint:disable-next-line: ban-types
  onEmit( event: string, payload: any, callback: Function ) {
    return this.io.emit( event, payload, callback );
  }

  onListen( event: string ) {
    return this.io.fromEvent( event );
  }

  onListenAux( event: string, callback: Function ) {
    return this.io.on( event, callback );
  }

  onLoadUserSocket() {
    const dataUser = this.st.onGetItem('dataUser', true);
    if (dataUser) {
      this.userSocket.pkUser = dataUser.pkUser || 0;
      this.userSocket.userName = dataUser.userName || '';
      this.userSocket.role = dataUser.role || '';
    }
  }

  onSingUserEmptySocket(): Promise<IResponse> {
    return new Promise( (resolve, reject) => {

      this.userSocket.role = 'USER_ROLE';

      this.onEmit( 'sing-user-game-empty', this.userSocket, ( res: IResponse ) => {

        console.log('respuesta sing socket', res);
        if (!res.ok) {
          reject( res.error );
        }
        resolve( res );
      });
    });

  }

  onSingUserSocket(): Promise<IResponse> {
    console.clear();
    return new Promise( (resolve, reject) => {

      this.st.onLoadToken();
      if (this.st.token === '') {

        // console.log('mi token', this.st.token);
        return resolve({
          ok: false,
          showError: 400,
          error: {
            message: 'Authenticar primero!'
          }
        });
      }
      this.onLoadUserSocket();

      this.onEmit( 'sing-user', this.userSocket, ( res: IResponse ) => {

        console.log('respuesta sing socket', res);
        if (!res.ok) {
          reject( res.error );
        }
        resolve( res );
      });
    });

  }

  onLogOutSocket(): Promise<IResponse> {
    //console.clear();

    return new Promise( (resolve, reject) => {

      this.onLoadUserSocket();

      this.onEmit('logout-user', this.userSocket, ( res: IResponse ) => {
        console.log('respuesta logout socket ', res);
        if (!res.ok) {
          reject( res.error );
        }
        resolve( res );
      });

    });
  }

}
