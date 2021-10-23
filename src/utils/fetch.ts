const PAYMONGO_API_URL = "https://api.paymongo.com/v1";

const makeHeaders = (secret: string) => {
  const basic = `${secret}:`;
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Basic ${btoa(basic)}`,
  };
};

export const makeRequest = <TData, TResponse>(
  path: string,
  method: "POST" | "GET" | "PUT",
  secret: string,
  data: TData
) => {
  if (!path || path.length === 0) throw "API endpoint required";
  if (Object.entries(data).length === 0) throw "Data is required";
  const promise = new Promise<TResponse>((resolve, reject) => {
    const options = {
      method: method,
      headers: makeHeaders(secret),
      body: JSON.stringify(data),
    };
    const url = PAYMONGO_API_URL.concat(path);
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => resolve(response as TResponse))
      .catch((error) => reject(error));
  });

  return promise;
};
