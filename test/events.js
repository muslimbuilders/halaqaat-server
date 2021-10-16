import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
import { should } from 'chai';
chai.use(chaiHttp);
should();


describe('Events', () => {
    it('should return all events', (done) => {
        chai.request(app)
        .get('/api/v1/events')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('status').eql(200);
            res.body.should.have.property('data');
            done();
        });
    });
    it('should return a single event', (done) => {
        chai.request(app)
        .get('/api/v1/events/1')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('status').eql(200);
            res.body.should.have.property('data');
            done();
        });
    }
    );
    it('should return a 404 error if event is not found', (done) => {
        chai.request(app)
        .get('/api/v1/events/100')
        .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('status').eql(404);
            res.body.should.have.property('error').eql('Event not found');
            done();
        });
    }
    );
    it('should return a 400 error if event id is not a number', (done) => {
        chai.request(app)
        .get('/api/v1/events/hello')
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('status').eql(400);
            res.body.should.have.property('error').eql('Event id must be a number');
            done();
        });
    }
    );
});