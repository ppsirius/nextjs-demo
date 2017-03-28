const { createServer } = require('http');
const { parse } = require('url');

const next = require('next');
const pathMatch = require('path-match');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const route = pathMatch();


app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    const postParams = route('/blog/:id')(pathname);

    if (postParams) {
      app.render(req, res, '/post', postParams);
    } else {
      handle(req, res, parsedUrl);
    }
  })
  .listen(3000, (err) => {
    if (err) {
      throw err;
    }

    console.log('> Ready on http://localhost:3000');
  });
});
