const express = require('express');
const app = express();
const {db} = require('./src/db/model');

db.sync({froce:true})
  .then(()=>{
    app.listen(4040,()=>{
        console.log("Server is running on http://localhost:4040");
    })
  })
  .catch((e)=>{
    console.log('database is not connected');
    console.error(e);
  })





