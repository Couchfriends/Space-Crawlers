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

SG.Menu.Level001 = function (label) {

    SG.Menu.Level.call(this, label);

    this.name = 'level-001';

    this.label = label || 'Level 1';

    this.brieving = 'We\'re not sheep! We are very much alike, you and I, I and you... us. Man\'s gotta know his limitations. You see, in this world there\'s two kinds of people, my friend: Those with loaded guns and those who dig. You dig. We had two bags of grass, seventy-five pellets of mescaline, five sheets of high-powered blotter acid, a saltshaker half-full of cocaine, and a whole galaxy of multi-colored uppers, downers, screamers, laughers... What? No. We can\'t stop here. This is bat country. This is my gun, Clyde! This is the AK-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it. When a naked man\'s chasing a woman through an alley with a butcher knife and a hard-on, I figure he\'s not out collecting for the Red Cross. Me? I\'m dishonest, and a dishonest man you can always trust to be dishonest. Honestly. It\'s the honest ones you want to watch out for, because you can never predict when they\'re going to do something incredibly... stupid. We are very much alike, you and I, I and you... us. When a naked man\'s chasing a woman through an alley with a butcher knife and a hard-on, I figure he\'s not out collecting for the Red Cross.';

    this.texture = [];
    for (var i = 0; i <= 31; i++) {
        var number = i;
        if (i < 10) {
            number = '0' + i;
        }
        this.texture.push(SG._resources['menu-level-001-0' + number].texture);
    }

    this.animationSpeed = .5;

};

SG.Menu.Level001.prototype = Object.create(SG.Menu.Level.prototype);

SG.Menu.Level001.prototype.init = function() {

    SG.Menu.Level.prototype.init.call(this);
    this.object.stop();

};

SG.Menu.Level001.prototype.update = function(time) {

    if (!SG.Menu.Level.prototype.update.call(this, time)) {
        return false;
    }
    this.object.rotation += .01;
};

SG.Menu.Level001.prototype.select = function() {

    if (!SG.Menu.Level.prototype.select.call(this)) {
        return false;
    }
    this.object.play();

};

SG.Menu.Level001.prototype.deselect = function() {

    if (!SG.Menu.Element.prototype.deselect.call(this)) {
        return false;
    }
    this.object.stop();

};