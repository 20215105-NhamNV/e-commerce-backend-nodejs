'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000
//count connect
const countConnect = () => {
    const numConnection = mongoose.connection.base.connections.length
    console.log('Number of connection:', numConnection)
    return numConnection
}

//check over load
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connection.base.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        //assume max mumber of connection based on number of cores
        const maxConnections = numCores * 5;

        console.log('Active connections:', numConnection)
        console.log('Memory usage:', memoryUsage / 1024 / 1024, "MB")

        if (numConnection > maxConnections) {
            console.log('Connection ovwrload detected!')
            //notify.send(.....)
        }
    }, _SECONDS)//Monitor every 5 seconds
}

module.exports = {
    countConnect,
    checkOverload
}