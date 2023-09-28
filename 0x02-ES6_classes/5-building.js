class Building {
  constructor(sqft) {
    // Verify the type of 'sqft'
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    // Store 'sqft' with an underscore
    this._sqft = sqft;
  }

  // Getter for the 'sqft' attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method: subclasses must implement this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;`
