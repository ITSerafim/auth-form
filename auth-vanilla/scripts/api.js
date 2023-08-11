export const api = {
  baseUrl: "http://localhost:8910/api",
  post: postHandler,
};

async function postHandler(payload, endpoint) {
  return await fetch(`${this.baseUrl}/${endpoint}`, {
    body: JSON.stringify(payload),
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}
