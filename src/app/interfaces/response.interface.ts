export interface IResponse {
  ok: boolean;
  error?: any;
  data?: any;
  showError: number;
  total?: number;
  token?: string;
  arrDetailErr?: IErrDetail[];
}

export interface IErrDetail {
  ok: boolean;
  error?: any;
  data?: any;
  showError?: number;
}
