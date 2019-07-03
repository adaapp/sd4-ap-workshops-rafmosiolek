class Farmer {
    constructor(userName) {
        this._field = null
        this._userName = userName
        this._image = loadImage('/images/farmer.png')
        this._x = 100
        this._y = 100
        this._width = 60
        this._height = 60
    }

    speak(words) {
        alert(words)
    }

    setActiveField(field) {
        this._field = field
    }

    update() {
        if (keyIsDown(RIGHT_ARROW)) {
            this._x = this._x + 3
        }
        if (keyIsDown(LEFT_ARROW)) {
            this._x = this._x - 3
        }
        if (keyIsDown(DOWN_ARROW)) {
            this._y = this._y + 3
        }
        if (keyIsDown(UP_ARROW)) {
            this._y = this._y - 3
        }

    }

    farmerKeyPressed() {
        if (keyCode == ENTER) {
            this.field.plant(this._x, this._y)
        }
    }

    draw() {
        var bobAmount = Math.sin(millis() / 60) * 3

        image(
            this._image,
            this._x,
            this._y + bobAmount,
            this._width,
            this._height
        )
    }

    getUserName() {
        return this._userName;
    }
} // End of the Farmer class oooarrr
