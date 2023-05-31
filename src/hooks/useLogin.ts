import { toast } from "react-hot-toast";
import Utils from "../utils";
import { AUTH_TOKEN, REFRESH_TOKEN } from "../constants/AuthConstant";
import { setRefreshToken, setToken, setUser } from "../store/slices/authSlice";
import { APP_PREFIX_PATH, AUTHENTICATED_ENTRY } from "../config/AppConfig";
import { LoginFormData, loginSchema } from "../schemas/login.schema";
import { useAppDispatch } from "../store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginUserMutation } from "../services/auth/authApi";
import { useState } from "react";
import useNavigation from "./useNavigation";
import { useForm } from "react-hook-form";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const { handleNavigate } = useNavigation();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await loginUser(data).unwrap();
      if (response.status === "Success") {
        const { access_token, refresh_token, super_admin } = response.data;

        toast.success(response.message);

        // Update the state
        dispatch(setUser(super_admin));
        dispatch(setToken(access_token));
        dispatch(setRefreshToken(refresh_token));

        localStorage.setItem(AUTH_TOKEN, access_token);
        localStorage.setItem(REFRESH_TOKEN, refresh_token);
        handleNavigate (`${AUTHENTICATED_ENTRY}`);
      }
    } catch (error: any) {
      const errorMessage = Utils.getErrorMessage(error);
      toast.error(errorMessage);
    }
  };

  const handleShowPassword = () => setShow(!show);

  return {
    onSubmit,
    handleShowPassword,
    isLoading,
    errors,
    isValid,
    register,
    handleSubmit,
    show,
  }
}