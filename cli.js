#!/usr/bin/env node

const
    nconf = require("nconf"),

    register = require("./index");

nconf.argv();

register(
    nconf.get("path"),
    nconf.get("app"),
    nconf.get("port"),
);
