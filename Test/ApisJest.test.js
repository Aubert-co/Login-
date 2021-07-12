const { expect } = require('chai')
const request = require('supertest')
,app = require('../app')
var server

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
    afterAll(async()=>{
        await server.close()
    })
})