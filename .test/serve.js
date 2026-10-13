const http=require('http'),fs=require('fs'),path=require('path');
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);
  if(p==='/')p='/index.html';
  const f=path.join(__dirname,'..',p);
  fs.readFile(f,(e,d)=>{ if(e){res.writeHead(404);res.end('nf');return;} 
    const ext=path.extname(f);
    res.writeHead(200,{'Content-Type':ext==='.js'?'application/javascript':ext==='.css'?'text/css':ext==='.html'?'text/html':'image/jpeg'});
    res.end(d);});
}).listen(8123,()=>console.log('ok'));
