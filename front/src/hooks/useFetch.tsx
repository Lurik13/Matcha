import { apiUrl } from "$/helper";
import { useMutation } from "@tanstack/react-query";

export default function useFetch(
  url: string,
  onSuccess?: (data: any) => void,
  onError?: (error: any) => void,
) {
  return useMutation({
    mutationFn: async (body: any) => {
      const res = await fetch(apiUrl(url), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ message: "Unknown error"}));
        console.log("error:", err);
        throw err;
      }
      
      console.log("res", res);
      return res.json();
    },

    onSuccess,
    onError,
  });
}
