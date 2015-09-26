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

SG.Menu.Level002 = function (label) {

    SG.Menu.Level.call(this, label);

    this.name = 'level-002';

    this.label = label || 'Level 2';

    this.brieving = 'Here must be money!';

    this.texture = SG._resources['menu-level-002'].texture;

    this.timer = 1200;
};

SG.Menu.Level002.prototype = Object.create(SG.Menu.Level.prototype);

SG.Menu.Level002.prototype.init = function() {

    SG.Menu.Level.prototype.init.call(this);

    for (var i = 1; i <= 11; i++) {
        var number = (i < 10) ? '0' + i : i;
        var child = new PIXI.Sprite(SG._resources['menu-level-002-child-0' + number].texture);
        child.position.x = -250 + (Math.random() * 350);
        child.anchor.set(.5);
        child.tint = 0xcccccc;
        child.motion = 50 + Math.random() * 35;
        child.motionRadius = Math.random() * (child.height + 30);
        this.object.addChild(child);
    }

};

SG.Menu.Level002.prototype.update = function(time) {

    if (!SG.Menu.Level.prototype.update.call(this, time)) {
        return false;
    }
    this.timer++;
    for (var i = 0; i < this.object.children.length; i++) {
        var child = this.object.children[i];
        child.position.y = child.motionRadius * Math.sin(this.timer / child.motion);
    }
};