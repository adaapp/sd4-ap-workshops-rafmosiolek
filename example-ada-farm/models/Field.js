class Field {
    constructor(name, health, x, y, width, height) {
        this._name = name
        this._health = health
        this._x = x
        this._y = y
        this._width = width
        this._height = height
        this._crops = []
    }

    getName() {
        return this._name;
    }

    getHealth() {
        return this._health;
    }

    setHealth(health) {
        this._health = health;
    }

    getCrops() {
        return this._crops;
    }

    updateCrops(crop) {
        this._crops.push(crop);
    }

    draw() {
        stroke('#7c4011')
        strokeWeight(10)
        fill('#b58969')
        rect(this._x, this._y, this._width, this._height, 10)
        for (var crop of this._crops) {
            crop.draw()
        }
    }

    plant(x, y) {
        console.log('new plant')
        // Get the crop name from the field name
        var cropName = this._name.split(' ') // => e.g. "Wheat"
        // Add a new crop to the field's list of crops
        this.updateCrops(new Crop(cropName[0], this, x, y))
    }

    containsPoint(x, y) {
        var top = this._y
        var bottom = this._y + this._height
        var left = this._x
        var right = this._x + this._width

        var isInVerticalRange = y > top && y < bottom
        var isInHorizontalRange = x > left && x < right

        return isInHorizontalRange && isInVerticalRange
    }
}
