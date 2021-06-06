export class SingUserModel {
  fkInsignia: number;
  fkTypeDoc: number;
  document: string;
  fullName: string;
  userName: string;
  userPassword: string;
  userPasswordTwo: string;
  email: string;
  phone: string;
  dateBorn: string;
  dateBornAux: any;
  referalCode: string;
  conditions: boolean;

  constructor() {
    this.fkInsignia = null;
    this.fkTypeDoc = null;
    this.document = '';
    this.fullName = '';
    this.userName = '';
    this.userPassword = '';
    this.userPasswordTwo = '';
    this.email = '';
    this.phone = '+51 ';
    this.dateBorn = '';
    this.dateBornAux = '';

    this.referalCode = '';
    this.conditions = false;
  }

  onReset() {
    this.fkInsignia = null;
    this.fkTypeDoc = null;
    this.document = '';
    this.fullName = '';
    this.userName = '';
    this.userPassword = '';
    this.userPasswordTwo = '';
    this.email = '';
    this.phone = '+51 ';
    this.dateBorn = '';
    this.dateBornAux = '';
    this.referalCode = '';
    this.conditions = false;
  }
}

export class IDate {
  year: number;
  month: number;
  day: number;
}
