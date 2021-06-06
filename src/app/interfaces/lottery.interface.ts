export interface ILottery {
  pkLottery: number;
  fkTypeLottery: number;
  fkSport: number;
  codeLottery: string;
  dateStart: string;
  dateEnd: string;
  countEvents: number;
  noExpire: boolean;
  nameSport: string;
  nameTypeLottery: string;
  statusRegister: boolean;
  dateRegister: string;
}


export interface IEventLottery {
  nameLeague: string;
	nameTeamOne: string;
	nameTeamTwo: string;
	nameCountry: string;
	dateEvent: string;
	nIndex: number;
  urlImgTeamOne: string;
  urlImgTeamTwo: string;
}

export interface IAwardLottery {
  nameAward: string;
  urlImg: string;
  hits: number;
  nIndex: number;
}