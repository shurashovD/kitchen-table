const ModbusRTU = require('modbus-serial')
const errorHandler = require('./handlers/errorHandler')

const client = new ModbusRTU()

const start = async () => {
    try {
        await client.connectRTUBuffered('/dev/ttyS0', {
            baudRate: 9600,
            dataBits: 8,
            parity: 'none',
            stopBits: 2
        })
        client.setID(4)
        client.setTimeout(1000)
        const res = await client.writeCoil(0, false)
        console.log(res)
    }
    catch (e) {
        errorHandler(e)
    } 
}

start()