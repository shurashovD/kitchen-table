const SerialPort = require('serialport')
const port = new SerialPort('/dev/ttyS0', {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 2
})
const ReadLine = require('@serialport/parser-readline')
const parser = port.pipe(new ReadLine())

const serialWrite = () => {
    try {
        port.write('!Hello\n:')
        console.log('Interval')
    }
    catch (e) {
        console.log(e)
    }
}

parser.on('data', data => {
    console.log(data)
    //serialWrite()
})

const serialApp = () => {
    port.open(err => {
        if (err) {
            console.log(err.message)
            setInterval(serialWrite, 50)
        }
    })
}

console.log('App is running...')

module.exports = serialApp