// Minimal Express server for demo. Not for production.
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const DBFILE = path.join(__dirname,'db.json');
app.use(bodyParser.json());
app.use(express.static(__dirname));

function readDB(){ try{ return JSON.parse(fs.readFileSync(DBFILE)); }catch(e){ return {users:[]}; } }

app.post('/api/signin', (req,res)=>{
  const {uid,pwd} = req.body||{};
  if(!/^\d{10}$/.test(uid)) return res.json({ok:false,error:'UID must be 10 digits'});
  const db = readDB();
  const user = db.users.find(u=>u.uid===uid);
  if(!user) return res.json({ok:false,error:'No such UID'});
  if(user.password !== pwd) return res.json({ok:false,error:'Invalid UID or password'});
  return res.json({ok:true,uid});
});

app.post('/api/forgot',(req,res)=>{
  // In a real deployment, this would trigger bot instructions. Here we just return a link.
  const {uid} = req.body||{};
  return res.json({ok:true,info:'Please follow bot instructions to reset.'});
});

app.post('/api/changepwd',(req,res)=>{
  const {uid,newpwd} = req.body||{};
  const db = readDB();
  const user = db.users.find(u=>u.uid===uid);
  if(!user) return res.json({ok:false,error:'No such UID'});
  user.password = newpwd;
  fs.writeFileSync(DBFILE,JSON.stringify(db,null,2));
  return res.json({ok:true});
});

app.get('/api/users',(req,res)=>{
  const db = readDB();
  res.json(db.users);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('Server listening on',port));
