import { Component } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eldonador-mgt';

  constructor( private io: SocketService ) {}

  ngOnInit() {
    this.io.onStatusSocket();
  }

}
