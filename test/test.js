var request = require('supertest');

describe('Run unit tests in memory',function() {
    var server;
    beforeEach(function() {
        server = require('./../app');
    });
    this.afterEach(function() {
        server.close();
    });
    
    it('Should reply with Polo when calling marco', function testSlash(done)
    {
        request(server)
            .get('/marco')    
            .expect(200)
            .expect('Polo!', done);
    });
    it('should 404 with anything else', function testPath(done){
        request(server)
            .get('/')
            .expect(404, done);
    });
});