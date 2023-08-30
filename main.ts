namespace SpriteKind {
    export const EnemyL = SpriteKind.create()
}
let list: Sprite[] = []
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -3
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    targetHealth = Math.max(targetHealth - 10, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += -3
})
function cleanup () {
    mySprite2 = sprites.allOfKind(SpriteKind.Enemy)
    mySprite2 = sprites.allOfKind(SpriteKind.EnemyL)
    for (let value of list) {
        sprites.destroy(value)
    }
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    statusbar.attachToSprite(mySprite)
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.max = 3
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x += 3
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 3
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.setLife(3)
    info.changeLifeBy(-1)
    maxHealth = 123
    currHealth = maxHealth
    targetHealth = maxHealth
    myHealthBar = sprites.create(image.create(40, 5), SpriteKind.StatusBar)
})
let myHealthBar: Sprite = null
let currHealth = 0
let maxHealth = 0
let mySprite2: Sprite[] = []
let targetHealth = 0
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
mySprite.setPosition(27, 51)
tiles.setCurrentTilemap(tilemap`level1`)
let myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b . . . b . . . . . 
    . . . . . . 3 b . b 3 . . . . . 
    . . . . . . b b b b b . . . . f 
    . . . . . b b b 2 2 b b b . f f 
    . . b b b b b f f 1 b b b f f . 
    . b b b b b b b f f f f b f . . 
    . b b b b b b b b b . f 3 f f f 
    b b b b b b b b b f f f . . . f 
    b b b b b b b b f f b . . . . . 
    b b b b b b b b b b b b b . . . 
    b b b b b b b b b b b b b b . . 
    3 b b b b 3 . . 3 b b b b 3 . . 
    . b 3 b b . . . . b 3 b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let My_enemy_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b . . . b . . . . . 
    . . . . . . 3 b . b 3 . . . . . 
    . . . . . . b b b b b . . . . f 
    . . . . . b b b 2 2 b b b . f f 
    . . b b b b b f f 1 b b b f f . 
    . b b b b b b b f f f f b f . . 
    . b b b b b b b b b . f 3 f f f 
    b b b b b b b b b f f f . . . f 
    b b b b b b b b f f b . . . . . 
    b b b b b b b b b b b b b . . . 
    b b b b b b b b b b b b b b . . 
    3 b b b b 3 . . 3 b b b b 3 . . 
    . b 3 b b . . . . b 3 b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.EnemyL)
story.spriteSayText(mySprite, "Oh no! They stole Ryan Reynolds, I have to save him!", 2, 15, story.TextSpeed.Slow)
myEnemy.setPosition(129, 24)
myEnemy.follow(mySprite, 5)
My_enemy_2.setPosition(114, 79)
My_enemy_2.follow(mySprite, 5)
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
