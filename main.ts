/** Este pequeño sketch lee la temperatura y la envía por radio */
let RADIO_GROUP = 127
let INTERVAL_MS = 2500
let show_text = false
let welcome_text = "EMISOR" + ("" + RADIO_GROUP)
basic.showString(welcome_text)
radio.setGroup(RADIO_GROUP)
function toggle_show_text() {
    
    show_text = !show_text
}

basic.forever(function loop() {
    //  Leo la temperatura
    let temp = input.temperature()
    // Enciendo y apago la radio constantemente
    radio.on()
    radio.sendNumber(temp)
    radio.off()
    //  Espero INTERVAL_MS milisegundos
    if (show_text) {
        basic.showString("" + temp)
    }
    
    basic.pause(INTERVAL_MS)
})
input.onButtonPressed(Button.A, toggle_show_text)
input.onButtonPressed(Button.B, toggle_show_text)
