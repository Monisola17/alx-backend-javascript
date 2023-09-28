class Airport {
  constructor(name, code) {
    // Store attributes with underscores
    this._name = name;
    this._code = code;
  }

  // Default string description returns the airport code
  toString() {
    return this._code;
  }

  // Getter for the 'name' attribute
  get name() {
    return this._name;
  }

  // Getter for the 'code' attribute
  get code() {
    return this._code;
  }
}

export default Airport;
