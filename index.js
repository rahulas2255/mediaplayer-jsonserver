const JSONServer= require('json-server')
const MPServer = JSONServer.create()
const router = JSONServer.router("db.json")
const middleware = JSONServer.defaults()
const PORT = 3000
MPServer.use(middleware)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log(`MP server started at port: ${PORT} and waiting for client request?!!!!`);
})