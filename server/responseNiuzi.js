const koa = require('koa');
const fs = require('fs');
const path = require('path')
const app = new koa();
const port = 8802;
const Router = require('koa-router');
const router = new Router();
const Redis = require('ioredis');

const redisClient = new Redis({
  host: 'localhost',
  port: 6379,
  db: 1,
})

function getJSON(fileName) {
  const data = fs.readFileSync(path.join(__dirname, `/JSON/${fileName}.json`), 'utf-8')
  return JSON.parse(data);
}

const navList = getJSON('navigatorList');
const hotWords = getJSON('hotWords');
const secKillList = getJSON('secKillList');
const serviceItem = getJSON('serviceItem');

const staticData = {
  navList, serviceItem, secKillList
};
const phones = getJSON('phones');

router
    .get('/hotWords', async ctx => {
      ctx.body={code: 200, success: true, data: hotWords};
    })
    .get('/getStaticData', async ctx => {
      ctx.body={code: 200, success: true, data: staticData};
    })
    .get('/phones', async ctx => {
      let body = {};
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
      ctx.body = body;
    })
    .get('/addCart', async ctx => {
      const {user} = ctx.query;

      console.log(ctx.query);
      await redisClient.set(user, JSON.stringify(ctx.query));
      ctx.body={msg: 'addCart', data: ctx.query};
    })

app.use(router.routes());

app.listen(port, () => {
  console.log(`niuZiNode is Listening in http://localhost:${port}`);
})
