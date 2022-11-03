"""
Este pequeño sketch lee la temperatura y la envía por radio
"""

RADIO_GROUP = 127
INTERVAL_MS = 2500
show_text = False

welcome_text = "EMISOR"+str(RADIO_GROUP)
basic.show_string(welcome_text)
radio.set_group(RADIO_GROUP)

def loop():
    # Leo la temperatura
    temp = input.temperature()

    #Enciendo y apago la radio constantemente
    radio.on()
    radio.send_number(temp)
    radio.off()

    # Espero INTERVAL_MS milisegundos
    if show_text : basic.show_string(str((temp)))
    basic.pause(INTERVAL_MS)

def toggle_show_text():
    global show_text
    show_text = not show_text

basic.forever(loop)
input.on_button_pressed(Button.A, toggle_show_text)
input.on_button_pressed(Button.B, toggle_show_text)