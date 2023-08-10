import { BaseResponse } from './base.response';

export interface ResponseWithData<T> extends BaseResponse {
  data: T;
}
