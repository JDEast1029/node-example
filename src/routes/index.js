const Router = require('koa-router');

const router = new Router({
  prefix: '/api'
});

router.get('/', (ctx, next) => {
  ctx.body = ctx.request.body;
  next();
});
router.get('/user', (ctx, next) => {
  ctx.body = 'user'
  next();
});

module.exports = router;