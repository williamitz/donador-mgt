export class LoginModel {
  userName: string;
  userPassword: string;

  constructor() {
    this.userName = '';
    this.userPassword = '';
  }

  onReset() {
    this.userName = '';
    this.userPassword = '';
  }
}
