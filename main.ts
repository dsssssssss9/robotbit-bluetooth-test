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
        lcdDisplay.lcdSetBgIamge("Sister1.jpg")
        robotbit.MotorStopAll()
    }
})
