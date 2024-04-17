#!/usr/local/bin/node
cP=require('child_process');
eF=cP.execFile;

function run(e=null,stou=null,ster=null){
    if(e)
        return;
    eF(process.argv[2],[process.argv[3]],null,run);
    console.log(`.:Executing process:.\n${stou}`);
}
//run();
function fork(code){
    console.log(`Forking into: ${process.argv[3]}`);
    p=cP.fork(process.argv[3]);
    p.on('data',(data)=>{console.log(data)});
    //p.on('close',fork);
    p.on('exit',fork);
}
fork();
console.log(process.argv);