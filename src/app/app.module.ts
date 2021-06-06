import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routng.module';
import { GameLayoutComponent } from './layouts/game-layout/game-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminComponentsModule } from './components/admin-components.module';
import { GameComponentsModule } from './components/game-components.module';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from '../environments/environment.prod';

const config: SocketIoConfig = { url: environment.URL_SERVER, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    GameLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminComponentsModule,
    GameComponentsModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
