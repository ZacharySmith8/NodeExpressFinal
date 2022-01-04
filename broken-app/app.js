const express = require('express');
let axios = require('axios');
var app = express();

app.post('/', async function(req, res, next) {
  try {
    let results = req.headers.developers.split(',').map(async d => {
      try{
       return await axios.get(`https://api.github.com/users/${d}`);
      }
      catch(err){
        console.log(err);
      }
    });
    results = await Promise.all(results);
   
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    console.log(out);
    return res.send(JSON.stringify(out));
  } catch {
    next(err);
  }
});

app.listen(3000);
