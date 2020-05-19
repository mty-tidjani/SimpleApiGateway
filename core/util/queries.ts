import axios from 'axios';

class Queries {
  public static get = (url: string, params: Object = {}) => axios.get(url, {
    params,
  });

  public static post = (url: string, data: Object, params: Object = {}) => axios.post(url, data, {
    params,
  })
}

export default Queries;
