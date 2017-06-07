const
    request = require("request-promise"),
    Promise = require("bluebird");

var LOG = message => console.log(message);

module.exports = (route, appName, port) => {
    LOG(`registering route ${route} to ${appName}...`);

    return request.post({
        url: `http://localhost:1999/${route}`,
        body: { id: appName, port }
    }).tap(port =>
        LOG(`registered ${appName} to localhost:${port}/${route}`));
};
