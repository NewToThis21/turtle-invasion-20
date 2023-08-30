// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202080203030303030202020202020202020203030303030302020202020202020303030303030303020202020202020303030303030303040404040404020203030303030303030404040404040202030303030303030304040404040402020303030303030302040404040404020203030303030302020404040404040202030303030302020404040404040202020303030302020204040404040402020202020202020202040404040404020202020202020202020404040404040202020202020202020204040501010105020202020202020202040406050707060202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile3,sprites.swamp.swampTile2,sprites.swamp.swampTile0,sprites.swamp.swampTile1,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2,sprites.dungeon.floorLight5,sprites.swamp.swampTile3], TileScale.Sixteen);
            case "level":
            case "level4":return tiles.createTilemap(hex`100010000607070707070707070901010a0707050901010101010101010101080808080a0901010101010101010108080101010a0901010101010101080101010101010a0901010101080808080101010101010a0901010108010101010101010101010a0901010801010101010101010101010a0901010801010101010101010101010a0901010801010101010101010101010a0901010808010101010101010101010a0901010101080808010101010101010a0901010101010101010101010101010a0901010101010101010101010101010a0901010101010101010101010101010a0901010101010101010101010101010a03020202020202020202020202020204`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
