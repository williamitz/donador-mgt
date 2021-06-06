import { IDateNg, ITimeNg } from '../interfaces/ngBootstrap.interface';
export class EventModel {

  pkEvent: number;
  fkSport: number;
  fkLeague: number;
  fkTeam: number;
  fkTeamTwo: number;
  fkNationality: number;
  dateEvent: string;
  evtDateStart: IDateNg;
  evtDateEnd: IDateNg;
  evtTimeStart: ITimeNg;
  evtTimeEnd: ITimeNg;
  dateEventEnd: string;
  priority: number;

  constructor() {
    this.pkEvent = 0;
    this.fkSport = null;
    this.fkLeague = 0;
    this.fkTeam = 0;
    this.fkTeamTwo = 0;
    this.evtTimeStart = {hour: 12, minute: 0};
    this.evtTimeEnd = {hour: 12, minute: 0};
    // this.fkNationality = 0;
    this.dateEvent = '';
    this.dateEventEnd = '';
    this.priority = 1;
  }

  onReset() {
    this.pkEvent = 0;
    this.fkSport = null;
    this.fkLeague = 0;
    this.fkTeam = 0;
    this.fkTeamTwo = 0;
    this.evtTimeStart = {hour: 12, minute: 0};
    this.evtTimeEnd = {hour: 12, minute: 0};
    // this.fkNationality = 0;
    this.dateEvent = '';
    this.dateEventEnd = '';
    this.priority = 1;
  }
}
