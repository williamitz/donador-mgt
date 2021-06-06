import { ITimeNg, IDateNg } from '../interfaces/ngBootstrap.interface';
export class LotteryModel {

  pkLottery: number;
  fkTypeLottery: number;
  fkSport: number;
  dateStart: string;
  dateEnd: string;
  evtTimeStart: ITimeNg;
  evtTimeEnd: ITimeNg;
  evtDateStart: IDateNg;
  evtDateEnd: IDateNg;
  detail: IDetailLottery[];
  awards: IDetailAward[];

  constructor() {
    this.pkLottery = 0;
    this.fkTypeLottery = null;
    this.fkSport = null;
    this.dateStart = '';
    this.dateEnd = '';
    this.evtTimeStart = {hour: 12, minute: 0};
    this.evtTimeEnd = {hour: 12, minute: 0};
    this.detail = [];
    this.awards = [];
  }

  onReset() {
    this.pkLottery = 0;
    this.fkTypeLottery = null;
    this.fkSport = null;
    this.dateStart = '';
    this.dateEnd = '';
    this.evtTimeStart = {hour: 12, minute: 0};
    this.evtTimeEnd = {hour: 12, minute: 0};
    this.detail = [];
    this.awards = [];
  }
}

export interface IDetailLottery {
  fkEvent: number;
  index: number;
  fullEvent: string;
  nameCountry: string;
  nameLeague: string;
  dateEvent: string;
}

export interface IDetailAward {
  fkAward: number;
  nameAward: string;
  hits: number;
  index: number;
}
