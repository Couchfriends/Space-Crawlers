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

SG.Menu.Level = function (label) {

    SG.Menu.Element.call(this);

    this.name = 'level';

    this.label = label || 'Level';

    this.brieving = '';

    this.level = ''; // The Level object to play();

};

SG.Menu.Level.prototype = Object.create(SG.Menu.Element.prototype);

/**
 * Callback after user clicked or activated the button
 */
SG.Menu.Level.prototype.activate = function() {

    SG.Menu.Element.prototype.activate.call(this);

    // @todo go to level
    var content = this.brieving;
    content += '<span onclick="SG.Level.init(\''+ this.level +'\');" onmouseover="SG._resources[\'sound-menu-button-select\'].data.play();" id="window-action">Play mission</span>';
    SG.Menu.showWindow (this.label, content);

};

/**
 * Callback after user clicked or activated the button
 */
SG.Menu.Level.prototype.update = function(time) {

    if (this.status != 'selected' || !SG.Menu.Element.prototype.update.call(this, time)) {
        return false;
    }
    return true;

};