export class TeamModel {
  pkTeam: number;
  fkSport: number;
  nameTeam: string;

  constructor() {
    this.pkTeam = 0;
    this.nameTeam = '';
  }

  onReset() {
    this.pkTeam = 0;
    this.nameTeam = '';
  }
}
