import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(10, { message: "Email is required" }),
  password: z.string().min(5, { message: "Password is required" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export type IUserLogin = LoginFormData;

export type IForgotPassword = Pick<LoginFormData, "email">;

export interface SuperAdmin {
  _id: string;
  name: string;
  email: string;
}

export interface AuthState {
  super_admin: SuperAdmin | null;
  access_token: string | null;
  refresh_token: string | null;
}
