//  Set up game
info.setScore(0)
info.setLife(3)
scene.setBackgroundColor(8)
// set up player
let Guardian = sprites.create(img`
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
`)
Guardian.setKind(SpriteKind.Player)
Guardian.setPosition(145, scene.screenHeight() / 2)
Guardian.setFlag(SpriteFlag.StayInScreen, true)
// player controls
controller.moveSprite(Guardian, 150, 150)
// set up enemies
game.onUpdateInterval(900, function on_update_interval() {
    let Eel = sprites.create(img`    9 9 9 . . . . 5 . . . . 5 . 5 .
    6 6 6 9 9 . 5 . . . . 5 . . . 5
    . 6 6 6 6 9 . . 9 9 9 . . . 5 .
    . . 6 6 6 6 9 9 6 6 6 9 9 . . .
    . . . 6 6 6 6 6 6 6 6 6 6 . . .
    . . 5 . . 6 6 6 6 . 6 6 6 2 6 6
    . 5 . . . . . . 5 . . . 6 6 1 1
    . . 5 . . . . 5 . . . . 6 6 6 6
    . 5 . . . . . . 5 . . . . . . .
    . . . . . . . 5 . . . 5 . . . . `)
    Eel.setKind(SpriteKind.Enemy)
    Eel.setPosition(5, randint(0, scene.screenHeight()))
    Eel.setVelocity(40, 0)
})
// shoot enemies w projectile
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_button_event_a_pressed() {
    let trident = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . . . . . .
    . 5 . . . . . . . . . . . . . . . . . .
    5 . 5 . 5 5 5 5 . . . . . . . . . . . .
    . . . . . . . 5 . . . . . . . . . . . .
    5 . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    . . . . . . . 5 . . . . . . . . . . . .
    5 . 5 . 5 5 5 5 . . . . . . . . . . . .
    . 5 . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . .
    `, Guardian, -70, 0)
})
// lose life when hit
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
// destroy enemy when hit
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_enemy_hit(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy(effects.disintegrate, 80)
    sprite.destroy()
    info.changeScoreBy(1)
})
