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
