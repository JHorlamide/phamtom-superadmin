import { IBaseResponse } from "../../schemas";

export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

export interface IAdmin {
  _id: string;
  admin_id: string
  name_of_institution: string;
  email: string;
  address: string;
  phone_number: string;
  registration_number: string;
  profile_image: string;
  permission_flag: number;
  subscription_permission_flag: string;
  subscription_type: string;
  is_subscribed: boolean;
  plan_code: string;
  reset_token: string;
  reset_token_expiration: number
  subscription_reference: string;
  id: string;
}

export interface ILogistics {
  logistics_image: string;
  logistics_name: string;
  logistics_url: string;
  _id: string;
}

export interface IPharmacist {
  _id: string;
  pharmacy_id: string;
  admin_id: string;
  name_of_pharmacy: string;
  name_of_superintendent_pharmacy: string;
  pharmacy_email: string;
  pharmacy_physical_address: string;
  pharmacy_phone: string;
  account_name: string;
  account_number: string;
  bank_name: string;

  valid_document: {
    imageUrl: string;
  }

  account_status: string;
  is_verified: boolean;
  logistics: ILogistics[];
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface IGetUsersRes extends IBaseResponse {
  data: any;
  // data: IUser[];
}

export interface IGetAdminReq {
  adminId: string;
}

export interface IGetAdminRes extends IBaseResponse {
  data: any;
}

export interface IGetPharmacies extends IBaseResponse {
  data: any;
}

export interface IGetPharmacyDetailsReq {
  pharmacyId: string;
}

export interface IGetPharmacyDetailsRes extends IBaseResponse {
  data: any;
}

export interface ApprovePharmacyReq {
  adminId: string;
}

export interface ApprovePharmacyRes extends IBaseResponse {
  data: any;
}

export interface GetStatsRes {
  data: {
    totalAdmins: number;
    totalPatientRecord: number;
    totalUsers: number;
    totalPharmacy: {
      totalPharmacy: number;
      totalApprovedPharmacy: number;
    },
  }
}