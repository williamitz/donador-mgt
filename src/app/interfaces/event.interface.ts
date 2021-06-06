export interface IEvent {
  pkEvent: number;
  fkSport: number;
  fkLeague: number;
  fkTeamOne: number;
  fkTeamTwo: number;
  fkNationality: number;

  nameSport: string;
  nameLeague: string;

  imgTeamOne: string;
  imgTeamTwo: string;
  nameTeamOne: string;
  nameTeamTwo: string;
  nameCountry: string;
  isoAlfaThree: string;
  dateEvent: string;
  dateEventEnd: string;
  statusRegister: boolean;
  dateRegister: string;
}

export interface IEventAll {
  pkEvent: number;
  fullEvent: string;
  nameTeamOne: string;
  nameTeamTwo: string;
  nameCountry: string;
  nameLeague: string;
  dateEvent: string;
}

