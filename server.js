const http=require('http');
const app=require('./express');
const server=http.createServer(app);
server.listen(process.env.PORT || 4500,()=>{
    console.log("Votre serveur est pret et est en cours d'excecution sur le port:"+server.address().port)
})
