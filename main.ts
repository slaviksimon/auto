bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        100,
        SuperBit.enMotors.M2,
        100
        )
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -100,
        SuperBit.enMotors.M2,
        -100
        )
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        100,
        SuperBit.enMotors.M2,
        -100
        )
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -100,
        SuperBit.enMotors.M2,
        100
        )
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        SuperBit.Servo(SuperBit.enServo.S1, 0)
    } else {
        SuperBit.MotorStopAll()
    }
})
