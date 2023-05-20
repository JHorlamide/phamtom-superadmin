import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../service/apiClient";

interface FetchResponse<T> {
  data: T[];
  status: string;
  message: string;
}

const useDataFetch = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  const controller = new AbortController();
  const { signal } = controller;

  const fetchData = async () => {
    try {
      const response = await apiClient.get<FetchResponse<T>>(endpoint, { signal, ...requestConfig })
      if(response.data.status === "Success") {
        setLoading(false);
        setData(response.data.data);
        console.log(response.data.status);
      }
    } catch (error: any) {
      setLoading(false);
      if (error instanceof CanceledError) return;
      setError(error.message);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
    return () => controller.abort();
  }, deps ? [...deps] : []);

  console.log({ data })

  return { data, error, isLoading, }
}

export default useDataFetch;