class Crop {
    constructor(type, field, x, y) {
        this.type = type
        // Get the image based on the name of the field
        this.image = loadImage('/images/'+type.toLowerCase()+'.png') // ./carrot.png
        this.health = 0
        this.field = field
        this._x = x
        this._y = y
        this._birthstamp = millis() / 1000
        this._width = 1
        this._height = 1
        this.healthySize = 30

        // Draw the crop when it's created
        this.draw()
    }

    getBirthstamp() {
        return this._birthstamp;
    }

    getAge() {
        // return the amount of time it's been alive
        return millis() / 1000 - this.getBirthstamp();
    }

    draw() {
        // set a width for the image based on its age
        if (this.getAge() < this.healthySize ) {
            var width = this._width * this.getAge()
            var height = this._height * this.getAge()
        } else {
            var width = 30;
            var height = 30;
        }
 
        image(
            this.image,
            this._x,
            this._y,
            width,
            height
        )
    }
}