My discs

# Installation & running

## Initial setup

* `cp config.server.js.dist to config.server.js` (and set required params)
* `npm install`
* `npm run start`
* Visit http://localhost:5689

## Production

* `git fetch --all`
* `git merge origin/master`
* `npm install` (may not be needed during each deployment)
* `npm run build`
* run as root when in project dir: `start src/server.js --interpreter ./node_modules/.bin/babel-node --log discs.janimattiellonen.fi.log --name "discs"` (use restart instead of start when restarting...)
* Visit website


## PM2 settings

`pm2 start src/server.js --interpreter ./node_modules/.bin/babel-node --log discs.janimattiellonen.fi.log --name "discs"`
`pm2 restart src/server.js --interpreter ./node_modules/.bin/babel-node --log discs.janimattiellonen.fi.log --name "discs"`

## Nginx

* use docs/nginx.conf.dist as a base

## 
