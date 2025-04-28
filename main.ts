/**
 * RobotBit LCD screen wiring / colour code
 * 
 * Black     ----->     GND
 * 
 * Red       ----->     3V
 * 
 * Green     ----->     SDA
 * 
 * Blue      ----->     SCL
 */
/**
 * 2 wire DC motor connected to M1 A
 */
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
let SerialData = ""
robotbit.MotorStopAll()
basic.showIcon(IconNames.Ghost)
lcdDisplay.lcdInitIIC()
lcdDisplay.lcdClearAll()
bluetooth.startUartService()
basic.forever(function () {
    SerialData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    if (SerialData == "A") {
        lcdDisplay.lcdSetBgIamge("fruit.png")
        robotbit.MotorRun(robotbit.Motors.M1A, 138)
    } else if (SerialData == "B") {
        lcdDisplay.lcdSetBgIamge("building.png")
        robotbit.MotorStopAll()
    }
})
