basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);

enum OnOff {
    Off1 = 0,
    On1 = 1
}
    
    //% color=#0fbc11 icon="\uf121"

namespace Led {
        //% blockId=octopus_moisture weight=10 blockGap=22
    //% block="digital write at pin %p| set %state"
        export function ledblink1(p: DigitalPin, state: OnOff): void {
            pins.digitalWritePin(p, state);
        }
    }