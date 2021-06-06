export class InsigniaModel {
  pkInsignia: number;
  htmlColor: string;
  label: string;
  constructor() {
    this.pkInsignia = 0;
    this.htmlColor = '#563d7c';
    this.label = '';
  }

  onReset() {
    this.pkInsignia = 0;
    this.htmlColor = '#563d7c';
    this.label = '';
  }
}
