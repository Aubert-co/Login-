const { expect } = require('chai')
, chai  = require('chai')

const chaiHTTP = require('chai-http')

const app = require('../app')

chai.use(chaiHTTP)
chai.should()
describe("Login post  /login",()=>{
    it("should return a wrong datas and a status 405 when send wrong datas",(done)=>{

        chai.request(app)
        .post('/login')
        .set({'Content-Type':'application/json'})
        .send({name:'lucas',password:''})
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(405)
            expect(res.body).to.deep.own.include({msg:'wrong datas'})
            
            done()
        })
    })

    it("should return a sucessful msg ,token and a status 200 when send correct datas",(done)=>{

        chai.request(app)
        .post('/login')
        .set({'Content-Type':'application/json'})
        .send({name:'lucas',password:'123'})
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(200)
            expect(res.body).to.include.all.keys('msg','token')
            
            done()
        })
    })
})