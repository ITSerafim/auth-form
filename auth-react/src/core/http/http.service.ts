

export class HttpService<R> {
  protected async post(endpoint: string, payload: R): Promise<Response> {
    return await fetch(endpoint, {
      body: JSON.stringify(payload),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
  }
}