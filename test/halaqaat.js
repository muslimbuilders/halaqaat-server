import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
import { should } from 'chai';
chai.use(chaiHttp);


should();


describe('Halaqaat', () => {
  describe('/GET halaqaat', () => {
    it('it should GET all the halaqaat', (done) => {
      chai.request(app)
        .get('/halaqaat')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST halaqaat', () => {
    it('it should not POST a halaqaat without name field', (done) => {
      const halaqaat = {
        name: '',
        description: '',
        date: '',
        time: '',
        location: '',
        user_id: 1
      };
      chai.request(app)
        .post('/halaqaat')
        .send(halaqaat)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.have.property('name');
          res.body.errors.name.should.have.property('kind').eql('required');
          done();
        });
    });
  });

  describe('/GET/:id halaqaat', () => {
    it('it should GET a halaqaat by the given id', (done) => {
      const halaqaat = new Halaqaat({
        name: 'Halaqaat',
        description: 'Halaqaat',
        date: '2019-01-01',
        time: '12:00',
        location: 'Halaqaat',
        user_id: 1
      });
      halaqaat.save((err, halaqaat) => {
        chai.request(app)
          .get('/halaqaat/' + halaqaat.id)
          .send(halaqaat)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.should.have.property('description');
            res.body.should.have.property('date');
            res.body.should.have.property('time');
            res.body.should.have.property('location');
            res.body.should.have.property('user_id');
            done();
          }
        );
      });
    });
  });

  describe('/PUT/:id halaqaat', () => {
    it('it should UPDATE a halaqaat given the id', (done) => {
      const halaqaat = new Halaqaat({
        name: 'Halaqaat',
        description: 'Halaqaat',
        date: '2019-01-01',
        time: '12:00',
        location: 'Halaqaat',
        user_id: 1
      });
      halaqaat.save((err, halaqaat) => {
        chai.request(app)
          .put('/halaqaat/' + halaqaat.id)
          .send({
            name: 'Halaqaat',
            description: 'Halaqaat',
            date: '2019-01-01',
            time: '12:00',
            location: 'Halaqaat',
            user_id: 1
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Halaqaat updated!');
            res.body.halaqaat.should.have.property('name');
            res.body.halaqaat.should.have.property('description');
            res.body.halaqaat.should.have.property('date');
            res.body.halaqaat.should.have.property('time');
            res.body.halaqaat.should.have.property('location');
            res.body.halaqaat.should.have.property('user_id');
            done();
          }
        );
      });
    });
  }
  );

  describe('/DELETE/:id halaqaat', () => {
    it('it should DELETE a halaqaat given the id', (done) => {
      const halaqaat = new Halaqaat({
        name: 'Halaqaat',
        description: 'Halaqaat',
        date: '2019-01-01',
        time: '12:00',
        location: 'Halaqaat',
        user_id: 1
      });
      halaqaat.save((err, halaqaat) => {
        chai.request(app)
          .delete('/halaqaat/' + halaqaat.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Halaqaat successfully deleted!');
            done();
          }
        );
      });
    });
  }
  );
});

