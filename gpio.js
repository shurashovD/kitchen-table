const Gpio = require('onoff').Gpio;
const led = new Gpio(14, 'out');
const button = new Gpio(15, 'in', 'both', { debounceTimeout: 100 });

led.writeSync(0)

button.watch((err, value) => {
    if (err) {
        throw err;
    }

    led.writeSync(value);
});

process.on('SIGINT', _ => {
    led.unexport();
    button.unexport();
});