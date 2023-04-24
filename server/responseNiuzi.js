const koa = require('koa');
const fs = require('fs');
const path = require('path')
const app = new koa();
const port = 3002;

function getJSON(fileName) {
    const data = fs.readFileSync(path.join(__dirname,`/JSON/${fileName}.json`), 'utf-8')
    return JSON.parse(data);
}

const navList = getJSON('navigatorList');
const hotWords = getJSON('hotWords');
const secKillList = getJSON('secKillList');
const serviceItem = getJSON('serviceItem');

const staticData = {
    navList, serviceItem, secKillList, hotWords
};
const phones = getJSON('phones');
app.use(async ctx=>{
    let body = {code: 200};
    console.log('someone request', ctx.url);
    switch (ctx.path){
        case '/getStaticData':{
            body.data=staticData;
            break;
        }
        /*phones太长，不应该一次性给完，可以通过携带query参数来指明需要哪一段，将phones进行分割*/
        case '/phones': {
            let {part} = ctx.query;
            if(!part){
                body.message = 'No part';
                part = 1;
            }
            console.log(part);
            body.data=phones.slice((part-1)*60, part*60);
            break;
        }
        default:{
            body.message = 'nothing to return!';
        }
    }
    ctx.body = body;
})

app.listen(port, ()=>{
    console.log(`niuZiNode is Listening in http://localhost:${port}`);
})
