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
function on_updated_interval() {
    let Eel = sprites.create(img`
        9 9 9 . . . . 5 . . . . 5 . 5 .
        6 6 6 9 9 . 5 . . . . 5 . . . 5
        . 6 6 6 6 9 . . 9 9 9 . . . 5 .
        . . 6 6 6 6 9 9 6 6 6 9 9 . . .
        . . . 6 6 6 6 6 6 6 6 6 6 . . .
        . . 5 . . 6 6 6 6 . 6 6 6 2 6 6
        . 5 . . . . . . 5 . . . 6 6 1 1
        . . 5 . . . . 5 . . . . 6 6 6 6
        . 5 . . . . . . 5 . . . . . . .
        . . . . . . . 5 . . . 5 . . . .
    `)
    Eel.setPosition(scene.screenWidth(), randint(120, 0))
}

let my_sprite = sprites.create(img` 
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
    . . . . . . . . . . . . . . . .`)
