const axios = require('axios');
const PAYMONGO_API_URL = 'https://api.paymongo.com/v1';

const makeHeaders = (secret: string) => {
  const basic = `${secret}:`;
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Basic ${btoa(basic)}`,
  };
};

export const makeRequest = <TData, TResponse>(
  path: string,
  method: 'POST' | 'GET' | 'PUT',
  secret: string,
  data: TData,
) => {
  if (!path || path.length === 0) throw new ReferenceError('API endpoint required');
  if (Object.entries(data).length === 0) throw new ReferenceError('Data is required');
  const promise = new Promise<TResponse>((resolve, reject) => {
    const request = axios({
      baseURL: PAYMONGO_API_URL,
      url: path,
      method,
      headers: makeHeaders(secret),
      data,
    });
    request.then((response: any) => resolve(response.data as TResponse)).catch((error: any) => reject(error));
  });

  return promise;
};
