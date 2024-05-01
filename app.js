const http = require('http');

const server = http.createServer((req, res)=>{

    res.setHeader('Content-Type', 'text/html');

    if(req.method === 'POST'){
        let body = '';

        req.on('data', (chunk)=>{
            body += chunk;
        });

        req.on('end', ()=>{
            let firstConcat = body.split('&');
            let test1=[];
            for(let i = 0; i < firstConcat.length; i++){
                test1[i] = parseInt(firstConcat[i].split('=')[1]);
            }
            res.end('R1= '+(test1[0]+test1[1])+' R2= '+(test1[0]+test1[1])*test1[2]);
        })
    }
    else{
        res.end(`<form method="POST">
                    <input type="text" name= "num1"/>
                    <br><br>
                    <input type="text" name= "num2"/>
                    <br><br>
                    <input type="text" name= "num3"/>
                    <br><br>
                    <button type="submit">Calcular</button>
                </form>`)
    }
})

server.listen(5001);