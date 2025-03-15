import { Interface_Request } from "@/interface";

export default async function request(
  url: string,
  method: string,
  headers: object | null,
  body: object | null
) {
  let params: Interface_Request;
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
