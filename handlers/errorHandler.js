module.exports = ({message}) => {
    switch (message) {
        case 'CRC error' : {
            console.log('Ошибка контрольной суммы')
            break
        }
        case 'Timed out' : {
            console.log('Устройство недоступно')
            break
        }
        case 'Modbus exception 1: Illegal function (device does not support this read/write function)' : {
            console.log('Функция не поддерживается устройством')
            break;
        }
        case 'Modbus exception 2: Illegal data address (register not supported by device)': {
            console.log('Запрошенный участок памяти недоступен')
            break;
        }
        default : {
            console.log(message)
            console.log('Что-то пошло не так...')
        }
    }
}