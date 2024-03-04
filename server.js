const express = require('express');
const app = express();
const {db} = require('./src/db/model');
const {postRoute}  = require('./src/routes/posts')
const {userRoute}  = require('./src/routes/users')


app.use('/api/post', postRoute)
app.use('/api/user', userRoute)
app.use('/', express.static(__dirname + '/src/public'));
app.use(express.urlencoded({extended:true}))

db.sync()
  .then(()=>{
    app.listen(4040,()=>{
        console.log("Server is running on http://localhost:4040");
    })
  })
  .catch((e)=>{
    console.log('database is not connected');
    console.error(e);
  })





