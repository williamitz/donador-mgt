export class LeagueModel {
  pkLeague: number;
  fkSport: number;
  nameLeague: string;

  constructor() {
    this.pkLeague = 0;
    this.fkSport = null;
    this.nameLeague = '';
  }

  onReset() {
    this.pkLeague = 0;
    this.fkSport = null;
    this.nameLeague = '';
  }
}
