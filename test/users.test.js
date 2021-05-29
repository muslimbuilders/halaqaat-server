import User from '../users/userModel.js';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

import should from chai.should();

chai.use(chaiHttp);

describe("** User Registration and Login **", () => {
  describe("/GET /", () => {
    it("it should GET home API url", async function () {
      const res = await chai.request(app).get("/");

      res.should.have.status(200);
    });
  });

  describe("/GET /404url", () => {
    it("it should GET 404 url", async function () {
      const res = await chai.request(app).get("/404url");
      res.should.have.status(404);
      res.body.should.be.an("object");
    });
  });
});
