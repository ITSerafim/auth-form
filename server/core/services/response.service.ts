import { ResponseWithData } from '../responses/with-data.response.';

export class ResponseService<T> {
  protected res(message = 'success', statusCode = 200) {
    return {
      message,
      statusCode,
    };
  }

  protected resData(
    data: T,
    message = 'success',
    statusCode = 200
  ): ResponseWithData<T> {
    return {
      message,
      statusCode,
      data,
    };
  }

  protected error(message: string): Error {
    throw new Error(message);
  }
}
