/**
 * Created by angry_bird on 16.05.2016.
 */
'use strict';

class SERVER {
    bootstrap(env) {
        this.express = require('express');
        this.app = this.express();
        this.clientRouter = this.express.Router();
        this.apiRouter = this.express.Router();
        this.env = env;

        this.app.disable('x-powered-by');
        //this.app.set('view engine', 'jade');
        this.app.set('view cache', this.env === 'production');

        this.setupRouting();
        this.app.listen(8888);
    }

    setupRouting() {
        const path = require('path');

        this.app.use('/build', this.express.static(path.join(__dirname, 'build'), {
            maxAge: this.env === 'production' ? 31536000 : 0
        }));

        this.app.use('/assets', this.express.static(path.join(__dirname, 'assets'), {
          maxAge: this.env === 'production' ? 31536000 : 0
        }));


        this.app.use('/vendor', this.express.static(path.join(__dirname, 'vendor'), {
            maxAge: this.env === 'production' ? 31536000 : 0
        }));

        this.app.use('/img', this.express.static(path.join(__dirname, 'img'), {
            maxAge: this.env === 'production' ? 31536000 : 0
        }));

        this.app.use('/fonts', this.express.static(path.join(__dirname, 'fonts'), {
            maxAge: this.env === 'production' ? 31536000 : 0
        }));

        this.clientRouter.get('/', function (req, res, next) {
          res.sendFile(path.join(__dirname,'index.html'))
        });
        this.apiRouter.get('/', function (req, res, next) {
            res.json({
                "message": "Hello, API!"
            })
        });

        this.app.use('/api', this.apiRouter);
        this.app.use('/', this.clientRouter);
    }
}
Object.create(SERVER.prototype).bootstrap(process.env.NODE_ENV || 'development');

