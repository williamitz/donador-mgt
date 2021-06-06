export class SportModel {
  pkSport: number;
  nameSport: string;

  constructor() {
    this.pkSport = 0;
    this.nameSport = '';
  }

  onReset() {
    this.pkSport = 0;
    this.nameSport = '';
  }
}
