import axios from 'axios';

export class Queries {
  public static get = (url: string, params: object = {}) => axios.get(url, {
    params,
  })

  public static post = (url: string, data: object, params: object = {}) => axios.post(url, data, {
    params,
  })
}

export const X = () => {};
