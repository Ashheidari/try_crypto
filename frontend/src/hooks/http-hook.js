import { useState, useCallback, useRef,useEffect } from "react";

const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [backendError, setBackendError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback ( async (
    url,
    method = "GET",
    body = null,
    headers = {}
  ) => {
    try {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);
      const response = await fetch(url, { method, body, headers,signal:httpAbortCtrl.signal });
      const responseData = await response.json();
      activeHttpRequests.current = activeHttpRequests.current.filter(
        reqCtrl => reqCtrl !== httpAbortCtrl
      );
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setIsLoading(false);
      return responseData;
    } catch (err) {
      setIsLoading(false);
      setBackendError(err.message);
      throw err;
    }
  },[]);
  const clearError = ()=>{
    setBackendError(null)
  }
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
    };
  }, []);
  return { isLoading, backendError,sendRequest,clearError };
};

export default useHttpClient;
