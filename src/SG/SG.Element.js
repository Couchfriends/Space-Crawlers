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

/**
 * Global object class for all objects in BreakOut. All objects should extend
 * from this object.
 * @constructor
 */
SG.Element = function () {

    /**
     * Name of the object. Used for collision detection.
     * @see this.collisionList
     * @type {string}
     */
    this.name = '';

    /**
     * The scene object
     */
    this.object;

    /**
     * The texture or textures of the element
     * @type {null}
     */
    this.texture = null;

    /**
     * If this.textures is an array of textures we use this number for animation
     * speed.
     * @type {number}
     */
    this.animationSpeed = 1;

};

SG.Element.prototype = {

    /**
     * Update the object during the gameloop. Might return false if the update
     * is not allowed.
     *
     * @param time
     *
     * @return {boolean}
     */
    update: function (time) {

        return true;

    },

    /**
     * Initial to create a ingame object like a Pixi Sprite
     */
    init: function() {

        if (this.texture != null && this.texture.length > 0) {
            var frames = [];
            for (var i = 0; i < this.texture.length; i++) {
                frames.push(this.texture[i]);
            }

            this.object = new PIXI.extras.MovieClip(frames);
            this.object.animationSpeed = this.animationSpeed;
            this.object.anchor.set(.5);
            this.object.play();
        }
        else if (this.texture != null) {
            this.object = new PIXI.Sprite();
            this.object.texture = this.texture;
            this.object.anchor.set(.5);
        }

    },

    add: function () {
        if (this.object != null) {
            this.object.Element = this;
            SG._stage.addChild(this.object);
        }
        SG._objects.push(this);
        SG._updateLayers();
    },

    remove: function () {
        if (this.object != null) {
            SG._stage.removeChild(this.object);
        }
        var indexOf = SG._objects.indexOf(this);
        SG._objects.splice(indexOf, 1);
    },

    resize: function() {

    }

};