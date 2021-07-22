const { expect } = require('chai')
const request = require('supertest')
const app = require('../app')
const dbSql = require('../model/db')
var server,globalToken

describe("POST /login",()=>{
    beforeAll((done)=>{
      server =  app.listen(4004,()=>{
            global.agent = request(server)
            done()
        })
    })
    test("return a error when send wrong datas",async()=>{
    const resp = await request(server)
        .post('/login')
        .set({'Content-Type':'application/json'})
        .send({name:'lucas',password:''})
        
        expect(resp.status).to.equal(405)
        
    })

    test("return a status 200 when send correct datas",async()=>{
       const resp =await request(server)
        .post('/login')
        .set({'Content-Type':'application/json'})
        .send({name:'jose',password:'123'})
    
        expect(resp.status).to.equal(200)
    })

    describe("POST cadastro",()=>{
        test("should return a status 405 when send wrong values",async()=>{
            const resp = await request(server)
            .post('/cadastro')
            .set({'Content-Type':'application/json'})
            .send({name:'',password:'123'})

            expect(resp.status).to.equal(404)
        })
        test("should return a status 200 when send correct values",async()=>{
            const resp = await request(server)
            .post("/cadastro")
            .set({'Content-Type':'application/json'})
            .send({name:'mat',password:'123'})
        })
        beforeEach(async()=>{
            const name = "mat"
            const query = `DELETE FROM Login_Users WHERE name='${name}'` 

            dbSql.query(query,(err,results)=>{
                if(err)throw err
            })

            const SELECT = `SELECT * FROM Login_Users WHERE name='${name}'`
            dbSql.query(SELECT,(err,results)=>{
                if(err)throw err
                expect(results.length).to.equal(0)
            })

            
        })
    })

    describe("GET HOME,",()=>{
        test("should return a status 404 when try logoin withou token",async()=>{
            const resp = await request(server)
            .get('/auth/home')
            
            expect(resp.status).to.equal(401)
        })

        beforeEach(async()=>{
            const resp = await request(server)
            .post('/login')
            .set({'Content-Type':'application/json'})
            .send({name:'jose',password:'123'})
            
            expect(resp.headers['x-api-token']).to.be.a('string')
            
            
            globalToken =resp.headers['x-api-token']
        })

        test("should return a status 200 when try connect home with a token",async()=>{
            const resp = await request(server)
            .get('/auth/home')
            .set({'x-api-token':globalToken})

            expect(resp.status).to.equal(200)
        })
    })
    afterAll(async()=>{
        await server.close()
    })
})


