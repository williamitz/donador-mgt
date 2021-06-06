import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { ITimeLottery, IInfoLottery } from '../../interfaces/game.interface';

@Component({
  selector: 'app-game-navbar',
  templateUrl: './game-navbar.component.html',
  styleUrls: ['./game-navbar.component.scss']
})
export class GameNavbarComponent implements OnInit {

  public currentTimeGlobal: ITimeLottery  = {
    hour: 0,
    minutes: 0,
    seconds: 0
  };

  arrTime: ITimeLottery[] = [];

  gameIntervalSbc: any;
  currentBackend: ITimeLottery = {
    hour: 0,
    minutes: 0,
    seconds: 0
  };

  constructor( private io: SocketService) { }

  ngOnInit() {
    this.onListenInfoLottery();
  }

  onListenInfoLottery() {
    this.io.onListen('current-info-global').subscribe( (resIO: IInfoLottery) => {
      console.log('info socket============================', resIO);

      this.currentTimeGlobal.hour = resIO.time.hour;

      this.currentBackend.hour = resIO.currentTime.hour;
      this.currentBackend.minutes = resIO.currentTime.minutes;
      this.currentBackend.seconds = Number( resIO.currentTime.seconds );

      this.arrTime.push( resIO.currentTime );

      console.log('evaluando...', this.currentBackend);

    });
  }

}
