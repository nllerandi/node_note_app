const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')
const notes = require('./notes')

const argv = yargs.argv;
console.log('yargs', argv)
console.log('process', process.argv)
const command = process.argv[2]

if (command === 'add') {
    console.log('adding note')
} else if (command === 'list') {
    console.log('listing all notes')
} else if (command === 'read') {
    console.log('reading note')
} else if (command === 'remove') {
    console.log('removing note')
} else {
    console.log('command not recognized')
}