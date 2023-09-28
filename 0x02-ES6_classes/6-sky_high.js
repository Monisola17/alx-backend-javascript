import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class constructor with 'sqft'
    super(sqft);

    // Verify the type of 'floors'
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }

    // Store 'floors' with an underscore
    this._floors = floors;
  }

  // Getter for the 'floors' attribute
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

export default SkyHighBuilding;
