interface INPUT {
  method: string;
  body?: any;
  headers?: any;
}

export default async function request(
  url: string,
  method: string,
  body: object | null
) {
  let params: INPUT;
  params = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (body) {
    params.body = JSON.stringify(body);
  }
  return await fetch(url, params)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
