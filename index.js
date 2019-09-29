#!/usr/bin/env node

const Bot = require('./src/handler/CrownBot')
const { prefix, token, ownerID, apikey } = require(process.argv[2] ? process.argv[2].replace("config=", "") : './config.json')

const bot = new Bot({
    prefix, token, ownerID, apikey
})

bot.init()
