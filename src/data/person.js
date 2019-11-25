
import {request} from '../utils';
 
export async function queryPerson () {
  return request({
    url: `http://localhost:3000/personList`,
    method: 'get'
  })
}
