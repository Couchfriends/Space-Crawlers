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

SG.Menu.Element = function () {

    SG.Element.call(this);

    this.status = ''; // Status of element. ''|selected
    this.selectable = true;

};

SG.Menu.Element.prototype = Object.create(SG.Element.prototype);

/**
 * Add button to menu and global objects
 */
SG.Menu.Element.prototype.init = function() {

    SG.Element.prototype.init.call(this);

    if (this.selectable == true) {
        this.object.tint = 0xcccccc;
        this.object.interactive = true;
        this.object.on('mouseover', this.select, this);
        this.object.on('mouseout', this.deselect, this);
        this.object.on('mouseup', this.activate, this);
        this.object.on('touchend', this.activate, this);
    }

};

/**
 * Add button to menu and global objects
 */
SG.Menu.Element.prototype.add = function() {

    SG.Element.prototype.add.call(this);
    SG.Menu._objects.push(this);

};
/**
 * Hover or 'selected'
 */
SG.Menu.Element.prototype.select = function() {

    if (SG.Menu.windowOpen == true || this.selectable == false) {
        return false;
    }
    SG._resources['sound-menu-button-select'].data.play();
    this.status = 'selected';
    this.object.tint = 0xffffff;
    for (var i = 0; i < this.object.children.length; i++) {
        var child = this.object.children[i];
        child.tint = 0xffffff;
    }
    return true;

};

SG.Menu.Element.prototype.deselect = function() {

    if (this.selectable == false) {
        return false;
    }
    this.status = '';
    this.object.tint = 0xcccccc;
    for (var i = 0; i < this.object.children.length; i++) {
        var child = this.object.children[i];
        child.tint = 0xcccccc;
    }
    return true;

};

/**
 * Callback after user clicked or activated the button
 */
SG.Menu.Element.prototype.activate = function() {

    if (SG.Menu.windowOpen == true || this.selectable == false) {
        return false;
    }
    SG._resources['sound-menu-button-active'].data.play();
    return true;
};