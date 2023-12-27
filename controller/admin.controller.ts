import * as supertest from 'supertest';
import config from '../specs/config/base.config';
const request = supertest(config.baseUrl);

class AdminController {

  postAdminLogin(data: { [key: string]: string  }) {
    return request
      .post('/admin/login')
      .send(data)
  }


}

export default new AdminController();