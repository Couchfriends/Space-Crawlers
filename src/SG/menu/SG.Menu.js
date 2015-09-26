/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Couchfriends
 * www.couchfriends.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
SG.Menu = {

    assets: [
        {
            key: 'menu-button',
            src: 'menu/button.png'
        },
        {
            key: 'menu-level-002',
            src: 'menu/level-002-background.png'
        },
        {
            key: 'menu-level-005',
            src: 'menu/level-005.png'
        },
        {
            key: 'sound-menu-button-select',
            src: 'menu/button-select.ogg'
        },
        {
            key: 'sound-menu-button-active',
            src: 'menu/button-active.ogg'
        }
    ],
    _objects: [],

    /**
     * Init and display the main menu.
     */
    init: function() {

        var windowContainer = document.createElement('div');
        windowContainer.id = 'window-container';
        var windowBody = document.createElement('div');
        windowBody.id = 'window-body';
        windowBody.innerHTML = '<div id="window-close" onclick="SG.Menu.closeWindow();" onmouseover="SG._resources[\'sound-menu-button-select\'].data.play();">X</div><div id="window-title"></div><div id="window-content"></div>';
        windowContainer.appendChild(windowBody);
        document.body.appendChild(windowContainer);

        for (var i = 0; i <= 31; i++) {
            var number = i;
            if (i < 10) {
                number = '0' + i;
            }
            this.assets.push({
                    key: 'menu-level-001-0' + number,
                    src: 'menu/level-001-0' + number + '.png'
                }
            );
        }
        for (var i = 1; i <= 11; i++) {
            var number = i;
            if (i < 10) {
                number = '0' + i;
            }
            this.assets.push({
                    key: 'menu-level-002-child-0' + number,
                    src: 'menu/level-002-child-0' + number + '.png'
                }
            );
        }
        SG.load(this.assets, function() { SG.Menu.display(); });

    },

    /**
     * Delete all objects that are being displayed in the menu
     */
    reset: function() {
        this.closeWindow();
        for (var i = 0; i < this._objects.length; i++) {
            var object = this._objects[i];
            object.remove();
        }
        this._objects = [];
    },

    /**
     * Displays the menu
     */
    display: function(type) {

        type = type || 'main';
        this.reset();

        //var background = new SG.Background();
        //background.init();
        //background.add();
        //this._objects.push(background);

        switch (type) {
            case 'level-select':
                this._displayLevelSelect();
            break;
            default:
                this._displayMain();
        }
    },

    windowOpen: false,
    showWindow: function(title, content) {
        if (this.windowOpen == true) {
            return false;
        }
        SG._resources['sound-menu-button-active'].data.play();
        this.windowOpen = true;
        document.getElementById('window-title').innerHTML = title;
        document.getElementById('window-content').innerHTML = content;
        document.getElementById('window-container').style.display = 'block';
    },

    closeWindow: function() {
        if (this.windowOpen == false) {
            return false;
        }
        SG._resources['sound-menu-button-active'].data.play();
        this.windowOpen = false;
        document.getElementById('window-container').style.display = 'none';
    },

    /**
     * Display main menu
     * @private
     */
    _displayMain: function() {

        var items = [
            {
                key: 'play',
                type: SG.Menu.ButtonPlay,
                text: 'Play'
            },
            {
                key: 'settings',
                type: SG.Menu.ButtonSettings,
                text: 'Settings'
            },
            {
                key: 'credits',
                type: SG.Menu.ButtonCredits,
                text: 'Credits'
            }
        ];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var typeButton = item.type || SG.Menu.Button;
            var button = new typeButton(item.text);
            button.init();
            button.object.position.x = SG.settings.width / 2;
            button.object.position.y = 150 + (i * 60);
            button.add();
        }

    },

    _displaySettings: function() {
        this.showWindow('Settings', '<p>Some settings here.</p>');
    },

    _displayCredits: function() {
        var html = '<ul>';
        html += '<li><a href="http://www.couchfriends.com" target="_blank">Couchfriends.com</a> - Game development</li>';
        html += '<li><a href="http://www.kenney.nl" target="_blank">Kenny.nl</a> - assets</li>';
        html += '<li><a href="http://opengameart.org/users/tatermand" target="_blank">Tatermand</a> - Space assets</li>';
        html += '<li>Shy Fonts - Menu font</li>';
        html += '<li><a href="https://soundcloud.com/alexandr-zhelanov" target="_blank">Alexandr Zhelanov</a> - Background music</li>';
        html += '<li>Prop - Background music</li>';
        html += '</ul>';
        this.showWindow('Credits', html);
    },

    /**
     * Displays the level select
     * @private
     */
    _displayLevelSelect: function() {
        var button = new SG.Menu.ButtonMenu();
        button.init();
        button.object.position.x = SG.settings.width - 25 - 95;
        button.object.position.y = SG.settings.height - 50;
        button.add();

        var level001 = new SG.Menu.Level001();
        level001.init();
        level001.object.position.x = 256;
        level001.object.position.y = 256;
        level001.add();

        var level002 = new SG.Menu.Level002();
        level002.init();
        level002.object.position.x = 512;
        level002.object.position.y = 256;
        level002.add();

        var level005 = new SG.Menu.Level005();
        level005.init();
        level005.object.position.x = 768;
        level005.object.position.y = 256;
        level005.add();

    }

};