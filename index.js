const
    request = require("request-promise"),
    Promise = require("bluebird");

var LOG = message => console.log(message);

module.exports = (route, appName, port) => {
    LOG(`registering route ${route} to ${appName}...`);

    const body = { id: appName };

    if(port)
        body.port = port;

    return request.post({
        url: `http://localhost:1999/${route}`,
        json: true,
        body
    }).catch(err => {
        throw new Error(`${err}: mucks not found?`)
    }).tap(port =>
        LOG(`registered ${appName} to localhost:${port}/${route}`));
};
