export const api = {
  baseUrl: "http://localhost:5000",
  post: postHandler,
};

async function postHandler(payload, endpoint) {
  return await fetch(`${this.baseUrl}/${endpoint}`, { body: payload, method: "POST" });
}
