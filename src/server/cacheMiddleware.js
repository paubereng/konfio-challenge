var mcache = require('memory-cache');

var cache = (duration) => {
    return (req, res, next) => {
        let key =  '__express__' + req.originalUrl || req.url
        let cacheContent = mcache.get(key);
        if(cacheContent){
            res.send( cacheContent );
            return
        }else{
            res.sendResponse = res.send
            res.send = (body) => {
                mcache.put(key,body,duration*1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}

module.exports = cache;
