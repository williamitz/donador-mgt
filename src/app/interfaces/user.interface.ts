export interface IUser {
  pkUser: number;
  // name: string;
  // surname: string;
  fullName: string;
  document: string;
  email: string;
  phone: string;
  fkDocument: number;
  // img: string;

  role: string;
  userName: string;

  prefix: string;

}

export interface IUserStorage {
  pkUser: number;
  userName: string;
  fullName: string;
  email: string;
  phone: string;
  // img: string;
  role: string;

  fkInsignia?: number;
  urlInsignia?: string;
}
