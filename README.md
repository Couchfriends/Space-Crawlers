# A wanna be turn-based game
A yet to be turn-based game.

## Install
`npm install` & `grunt` or open the build/index.html in your browser

### Thanks to
* [Kenney.nl](http://www.kenney.nl) - assets
* [Tatermand](http://opengameart.org/users/tatermand) - Space assets
* Shy Fonts - menu font
* [Alexandr Zhelanov](https://soundcloud.com/alexandr-zhelanov) - Background music
* Prop - Background music

### Object structure
```
+ Sg
|
+--+ Element
|  |
|  + Menu // Everything in menu
|  |
|  +--+ Menu.Element
|  |  |
|  |  +--+ Menu.Button
|  |  |  |   Menu.ButtonMenu
|  |  |  |   Menu.ButtonPlay
|  |  |
|  |  +--+ Menu.Level
|  |     |   Menu.LevelOne
|  |     |   Menu.LevelTwo
|  |     |   ...
|  |
|  +--+ ...
```