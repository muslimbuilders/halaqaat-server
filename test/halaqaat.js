import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
import { should } from 'chai';
chai.use(chaiHttp);

describe('*********** Halaqaat ***********', () => {
  describe('/GET Halqah', () => {
    it('it should GET all Halaqaat', async function () {
      const res = await chai.request(app).get('/api/v1/halqah');

      res.should(200);
      res.body.should.be.an('object');
    });
  });
});
