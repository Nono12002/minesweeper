input.onPinPressed(TouchPin.P0, function () {
    sprite.move(1)
})
input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    sprite.turn(Direction.Right, 90)
})
input.onPinPressed(TouchPin.P1, function () {
    sprite.move(-1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (game.score() == 0) {
        if (sprite.get(LedSpriteProperty.X) == Flag_1.get(LedSpriteProperty.X)) {
            if (sprite.get(LedSpriteProperty.Y) == Flag_1.get(LedSpriteProperty.Y)) {
                basic.showLeds(`
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    . . . . .
                    `)
                game.setScore(1)
            }
        } else {
            game.removeLife(1)
        }
    }
    if (game.score() == 1) {
        if (sprite.get(LedSpriteProperty.X) == Flag_2.get(LedSpriteProperty.X)) {
            if (sprite.get(LedSpriteProperty.Y) == Flag_2.get(LedSpriteProperty.Y)) {
                basic.showLeds(`
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    . . . . .
                    `)
                game.setScore(2)
            }
        } else {
            game.removeLife(1)
        }
    }
    if (game.score() == 2) {
        if (sprite.get(LedSpriteProperty.X) == Flag_3.get(LedSpriteProperty.X)) {
            if (sprite.get(LedSpriteProperty.Y) == Flag_3.get(LedSpriteProperty.Y)) {
                basic.showLeds(`
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    . . . . .
                    `)
                game.setScore(3)
            }
        } else {
            game.removeLife(1)
        }
    }
})
let Flag_3: game.LedSprite = null
let Flag_2: game.LedSprite = null
let Flag_1: game.LedSprite = null
let sprite: game.LedSprite = null
game.setScore(0)
game.setLife(5)
sprite = game.createSprite(2, 2)
Flag_1 = game.createSprite(randint(0, 4), randint(0, 4))
Flag_2 = game.createSprite(randint(0, 4), randint(0, 4))
Flag_3 = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (game.score() == 3) {
        game.gameOver()
    }
})
