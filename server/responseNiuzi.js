const koa = require('koa');
const fs = require('fs');
const path = require('path')
const app = new koa();
const port = 3002;

function getJSON(fileName) {
  const data = fs.readFileSync(path.join(__dirname, `/JSON/${fileName}.json`), 'utf-8')
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
app.use(async ctx => {
  let body = {code: 200};
  console.log('someone request', ctx.url);
  switch (ctx.path) {
    case '/hotWords': {
      body.data = hotWords;
      break;
    }
    case '/getStaticData': {
      body.data = staticData;
      break;
    }
    /*phones太长，不应该一次性给完，可以通过携带query参数来指明需要哪一段，将phones进行分割*/
    case '/phones': {
      let {page} = ctx.query;
      console.log('query', ctx.query);
      console.log(page);
      page = Number(page);
      if (!page) {
        body.message = 'No part';
        page = 1;
      }
      body.data = Object.create(null)
      body.data.records = phones.slice((page - 1) * 10, page * 10);
      body.data.total = phones.length;
      body.success = true;
      break;
    }
    default: {
      body.message = 'nothing to return!';
    }
  }
  ctx.status = 200;
  ctx.body = body;
})

app.listen(port, () => {
  console.log(`niuZiNode is Listening in http://localhost:${port}`);
})
