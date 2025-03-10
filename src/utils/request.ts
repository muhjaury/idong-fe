interface IF_Params {
  method: string;
  body?: any;
  headers?: any;
}

export default async function request(
  url: string,
  method: string,
  headers: object | null,
  body: object | null
) {
  let params: IF_Params;
  params = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
  if (body) {
    params.body = JSON.stringify(body);
  }
  return await fetch(url, params)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
