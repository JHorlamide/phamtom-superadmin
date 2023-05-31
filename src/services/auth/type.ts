import { IBaseResponse } from "../../schemas";
import { SuperAdmin } from "../../schemas/login.schema";

export interface ILoginResponse extends IBaseResponse {
  data: {
    access_token: string;
    refresh_token: string;
    super_admin: SuperAdmin
  }
}

export interface IRegisterResponse extends IBaseResponse {
  data: null;
}