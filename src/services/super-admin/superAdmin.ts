import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from "../../config/AppConfig";
import { IGetUsersRes, IGetAdminRes, IGetPharmacies, ApprovePharmacyReq, ApprovePharmacyRes, GetStatsRes, IGetPharmacyDetailsRes, IGetPharmacyDetailsReq } from "./type";
import { RootState } from "../../store/store";
import { AUTH_TOKEN } from "../../constants/AuthConstant";

export const SUPER_ADMIN_API_REDUCER_KEY = "phamtomApi";

export const superAdminApi = createApi({
  reducerPath: SUPER_ADMIN_API_REDUCER_KEY,
  tagTypes: ["Users", "Admins", "Pharmacies", "Pharmacy", "PharmacyDetails", "Stats"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}`,
    prepareHeaders: async (headers, { getState }) => {
      const isBrowser = typeof window !== undefined;
      const token = (getState() as RootState).auth.token ||
        (isBrowser ? localStorage.getItem(AUTH_TOKEN) : null);

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    }
  }),

  endpoints: (builder) => ({
    getAllUsers: builder.query<IGetUsersRes, void>({
      query: () => ({
        url: `/super-admin/users`
      }),

      providesTags: ["Users"]
    }),

    getAllAdmins: builder.query<IGetAdminRes, void>({
      query: () => ({
        url: `/super-admin/admins`
      }),

      providesTags: ["Admins"]
    }),

    getAllPharmacies: builder.query<IGetPharmacies, void>({
      query: () => ({
        url: `/super-admin/online-pharmacy`
      }),

      providesTags: ["Pharmacies"]
    }),

    getPharmaciesDetails: builder.query<IGetPharmacyDetailsRes, IGetPharmacyDetailsReq>({
      query: ({ pharmacyId }) => ({
        url: `/super-admin/online-pharmacy/${pharmacyId}`
      }),

      providesTags: ["PharmacyDetails"]
    }),

    approvePharmacy: builder.mutation<ApprovePharmacyRes, ApprovePharmacyReq>({
      query: ({ adminId }) => ({
        url: `/super-admin/online-pharmacy/${adminId}/approve`,
        method: "POST"
      }),

      invalidatesTags: ["Pharmacies"]
    }),

    suspendPharmacy: builder.mutation<ApprovePharmacyRes, ApprovePharmacyReq>({
      query: ({ adminId }) => ({
        url: `/super-admin/online-pharmacy/${adminId}/suspend`,
        method: "POST"
      }),

      invalidatesTags: ["Pharmacies"]
    }),

    getStats: builder.query<GetStatsRes, void>({
      query: () => ({
        url: `/stats/super-admin`,
      }),

      providesTags: ["Stats"]
    })
  }),

  refetchOnFocus: true,
  refetchOnReconnect: true
})

export const {
  useGetAllUsersQuery,
  useGetAllAdminsQuery,
  useGetAllPharmaciesQuery,
  useApprovePharmacyMutation,
  useSuspendPharmacyMutation,
  useGetStatsQuery,
  useGetPharmaciesDetailsQuery
} = superAdminApi;
