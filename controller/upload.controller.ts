import * as supertest from 'supertest';
import config from '../specs/config/base.config';
const request = supertest(config.baseUrl);

    class UploadController {
        postUploadSingle(filepath: string) {
          return request
            .post('/upload/single')
            .attach('single', filepath)
        }

        postUploadMultiple(files: string[]) {
            const req = request
              .post('/upload/multiple')
        
            files.forEach(file => {
              req
                .attach('multiple', file)
            })
        
            return req;
          }
      }

export default new UploadController();