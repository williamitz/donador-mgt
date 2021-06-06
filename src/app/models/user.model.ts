export class UserModel {
  fkTypeDoc: number;
  document: string;
  fullName: string;
  userName: string;
  userPassword: string;
  email: string;
  phone: string;
  role: string;
  dateBorn: string;

  constructor() {
    this.fkTypeDoc = null;
    this.document = '';
    this.fullName = '';
    this.userName = '';
    this.userPassword = '';
    this.email = '';
    this.phone = '';
    this.role = 'USER_ROLE';
    this.dateBorn = '';
  }

  onReset() {
    this.fkTypeDoc = null;
    this.document = '';
    this.fullName = '';
    this.userName = '';
    this.userPassword = '';
    this.email = '';
    this.phone = '';
    this.role = 'USER_ROLE';
    this.dateBorn = '';
  }
}
