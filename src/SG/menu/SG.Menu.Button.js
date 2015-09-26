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

SG.Menu.Button = function (label) {

    SG.Menu.Element.call(this);

    this.name = 'button';

    this.label = label || 'OK';

    // Text child object
    this.text = {};

    this.texture = SG._resources['menu-button'].texture;

};

SG.Menu.Button.prototype = Object.create(SG.Menu.Element.prototype);

SG.Menu.Button.prototype.init = function () {

    SG.Menu.Element.prototype.init.call(this);

    var textStyle = {
        font: '36px font-DISTGRG, arial',
        fill: '#000000'
    };

    this.text = new PIXI.Text(this.label, textStyle);
    this.text.anchor.set(.5);
    this.object.addChild(this.text);
    this.object.tint = 0xffffff;

};

/**
 * Hover or 'selected'
 */
SG.Menu.Button.prototype.select = function() {

    SG.Menu.Element.prototype.select.call(this);
    this.object.tint = 0xff9900;
};

SG.Menu.Button.prototype.deselect = function() {

    SG.Menu.Element.prototype.deselect.call(this);
    this.object.tint = 0xffffff;

};