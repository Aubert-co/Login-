/*const { expect } = require('chai')
,chai  = require('chai')

const chaiHTTP = require('chai-http')

const app = require('../app')
var token
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
        .send({name:'jose',password:'123'})
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(200)
            expect(res.body).to.include.all.keys('msg','token')
            
            done()
        })
    })
})

describe('Cadastro post /cadastro',()=>{
    it("should return a error msg and a status 404 when send wrong datas",(done)=>{

        chai.request(app)
        .post('/cadastro')
        .set({'Content-Type':'application/json'})
        .send({name:'qwe',password:''})
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(404)
            expect(res.body).to.deep.own.include({msg:'wrong datas'})

            done()
        })
    })
})


describe("Auth middleware /auth ",()=>{
    it("should return a error msg when connect without a token",(done)=>{

        chai.request(app)
        .get('/auth/')
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(401)

            expect(res.body).to.deep.own.include({msg:'No token provided'})

            done()
        })
    })
 it("should return a sucessful msg and status when send a token",(done)=>{
      
      
        chai.request(app)
        .get('/auth/home')
        .set({'x-api-token':token})
        .end((err,res)=>{
            if(err)done(err)

            expect(res).to.have.status(200)
            done()
        })
    })

    
})



async function login(){
    const agent = chai.request.agent(app)
    token = await agent.post('/login')
    .set({'Content-Type':'application/json'})
    .send({name:'jose',password:'123'})
    .then(async(res)=>token = await  res.header['x-api-token'])
    
}
login()





 *  const token = data.header['x-api-token']
               
                 agent.get('/auth/home')
                .set({'x-api-token':token})
                .end((err,response)=>{
                    if(err)done(err)
                    expect(response).to.have.status(200)
                    done()
                })
 */