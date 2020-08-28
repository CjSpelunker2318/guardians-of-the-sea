# Set up game
info.set_score(0)
info.set_life(3)
scene.set_background_color(8)

#set up player
Guardian = sprites.create(img("""
    . . 5 5 5 5 . . . . . . . . . . . . . .
    . . . . . 5 . . . . . . . . . . . . . .
    5 5 5 5 5 5 5 5 5 5 5 9 5 5 5 5 5 5 5 5
    . . . . . 5 . 9 9 9 9 . 9 . . 4 4 . . .
    . . 5 5 5 5 . 9 4 9 9 9 . 9 . 4 4 . . .
    . . . . . . . 9 4 4 4 9 9 9 . 4 4 . . .
    . . . . . . . . 4 4 4 9 9 . 9 4 4 . . .
    . . . . . . . . . 4 4 . 9 9 . 4 4 . . .
    . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . .
    . . . . . . 4 4 4 4 4 4 4 4 4 4 4 . . .
    . . . a a a 4 4 e 4 4 4 4 . . . . . . .
    . . a a b a 4 4 e 4 4 4 4 . . . . . . .
    . a a 4 b 4 4 4 e 4 4 4 4 . . . . . . .
    . a a 4 b 4 4 e a 4 4 4 4 . . . . . . .
    . . a a b a a a a e 4 4 4 . . . . . . .
    . . . a a a a a a e e 4 4 . . . . . . .
    . . . . . . . . 7 7 7 7 7 . . . . . . .
    . . . . . . . . 7 7 7 7 7 7 . . . . . .
    . . 6 6 . . . . 7 7 7 7 7 7 7 . . . . .
    . . 7 7 6 6 . . 6 6 7 7 7 7 7 6 . . . .
    . . 6 7 7 7 6 6 7 7 7 6 7 7 7 7 . . . .
    . . . 6 6 7 7 7 7 6 6 . 7 7 7 7 . . . .
    . . . . . 6 7 7 6 . . . 7 7 7 7 . . . .
    . . . . . . 7 7 7 7 7 7 6 7 7 7 . . . .
    . . . . . . 6 7 7 7 7 7 7 7 7 6 . . . .
    . . . . . . . . . 6 7 7 7 6 . . . . . .
"""))
Guardian.set_kind(SpriteKind.player)
Guardian.set_position(145, scene.screen_height()/2)
Guardian.set_flag(SpriteFlag.StayInScreen, True)

#player controls
controller.move_sprite(Guardian, 150,150)

#set up enemies
def on_update_interval():
    Eel = sprites.create(img("""    9 9 9 . . . . 5 . . . . 5 . 5 .
    6 6 6 9 9 . 5 . . . . 5 . . . 5
    . 6 6 6 6 9 . . 9 9 9 . . . 5 .
    . . 6 6 6 6 9 9 6 6 6 9 9 . . .
    . . . 6 6 6 6 6 6 6 6 6 6 . . .
    . . 5 . . 6 6 6 6 . 6 6 6 2 6 6
    . 5 . . . . . . 5 . . . 6 6 1 1
    . . 5 . . . . 5 . . . . 6 6 6 6
    . 5 . . . . . . 5 . . . . . . .
    . . . . . . . 5 . . . 5 . . . . """))
    Eel.set_kind(SpriteKind.enemy)
    Eel.set_position(5, randint(0,scene.screen_height()))
    Eel.set_velocity(40, 0)

    def on_update():
        if info.score()>10:
            Anglerfish = sprites.create(img(""" 
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . f f f . . . .
    e e e . . . . . f . . . f f . .
    . e e . . . . . f . . . . . f .
    e e e . f e e e e e . . . . 5 .
    . e e f e f e e e 2 2 e . . 5 .
    e e e e e 3 3 e e e e e e . . .
    . e e e 3 3 3 e e e 1 . 1 . . .
    e e e . e e e e e e . 1 . e . .
    . e e . . . f e e e e e e e . .
    e e e . . . . . f f e e . . . .
    . . . . . . . . . . . . . . . ."""))
            Anglerfish.set_kind(SpriteKind.enemy)
            Anglerfish.set_position(0, randint(0,scene.screen_height()))
            Anglerfish.set_velocity(20, 0)
            game.on_update(on_update)
    def on_update2():
        Shark = sprites.create(img("""
        . . . . . . . . . . . . . f 6 9 f . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . f 6 9 f f . . . . . . . . . . . .
        . . . . . . . . . . . . . . 8 6 6 9 9 f . . . . . . . . . . .
        f f f . . . . . . . . . . . 8 6 6 6 6 9 f . . . . . . . . . .
        f 6 6 9 . . . . . . . . . . 8 6 6 6 6 6 6 f f f 9 9 9 f . . .
        . f 6 6 9 . . . . . . . . f 8 6 6 6 6 6 6 6 6 6 6 6 6 6 f f .
        . 8 6 6 9 . . . . . f f f 8 6 6 6 6 6 6 6 6 6 f 6 6 6 6 6 9 f
        . . 8 6 6 9 . . f f 8 8 8 8 6 6 6 6 6 6 6 6 2 2 f 6 6 6 6 9 f
        . . 8 6 6 f f f 8 8 8 8 8 6 6 6 6 6 6 6 6 6 2 2 d d d d d 6 f
        . . 8 6 6 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 d d d d d d d d d f .
        . 8 6 6 6 6 8 8 8 8 8 8 6 6 6 6 6 6 6 6 d 3 3 1 3 1 3 1 f . .
        . 8 6 6 f f 8 8 8 8 8 8 8 6 6 6 6 6 6 d d d 3 3 3 3 3 f . . .
        8 6 6 f . . f 8 8 8 8 8 8 8 9 6 6 6 6 d d d 1 3 3 3 f . . . .
        f f f . . . . f 8 8 8 8 8 9 9 6 6 6 d d d d d 3 1 f . . . . .
        . . . . . . . . f f 8 8 9 8 8 8 6 9 d d d d d f f . . . . . .
        . . . . . . . . . . f f 8 8 8 8 9 f f f f f f . . . . . . . .
        . . . . . . . . . . . . f f f f 8 . . . . . . . . . . . . . .
    """))
        Shark.set_kind(SpriteKind.enemy)
        Shark.set_position(0, randint(0,scene.screen_height()))
        Shark.set_velocity(20, 0)
        game.on_update(on_update)
game.on_update_interval(900, on_update_interval)

#shoot enemies w projectile
def on_button_event_a_pressed():
    trident = sprites.create_projectile_from_sprite(img("""
    . . . . . . . . . . . . . . . . . . . .
    . 5 . . . . . . . . . . . . . . . . . .
    5 . 5 . 5 5 5 5 . . . . . . . . . . . .
    . . . . . . . 5 . . . . . . . . . . . .
    5 . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    . . . . . . . 5 . . . . . . . . . . . .
    5 . 5 . 5 5 5 5 . . . . . . . . . . . .
    . 5 . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . .
    """), Guardian, -70, 0)
controller.player1.on_button_event(ControllerButton.A, ControllerButtonEvent.PRESSED, on_button_event_a_pressed)
if 
#lose life when hit

#destroy enemy when hit
