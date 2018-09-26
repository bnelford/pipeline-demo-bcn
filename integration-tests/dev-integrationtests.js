var request = require('supertest');

describe('Running integration tests on the deployed app in dev', function() {
    it('responds to /marco with Polo!', function testSlash(done) {
        request('http://localhost:3003')
          .get('/marco')
          .expect('Polo!')
          .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
        request('http://localhost:3003')
          .get('/foo/bar')
          .expect(404, done);
    });
    it('404 /', function testPath(done) {
        request('http://localhost:3003')
          .get('/')
          .expect(404, done);
    });
});