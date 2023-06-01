'use strict'
const merge = require('webpack-merge')
const prodEnv = require('../.env.json')

var env =  merge(prodEnv,{
    NODE_ENV: '"development"',
});

module.exports = env