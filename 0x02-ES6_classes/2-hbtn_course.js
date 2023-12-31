class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the types of attributes
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number' || length <= 0) {
      throw new TypeError('Length must be a positive number');
    }

    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Store attributes with underscores
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and setter for the 'name' attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter and setter for the 'length' attribute
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number' || newLength <= 0) {
      throw new TypeError('Length must be a positive number');
    }
    this._length = newLength;
  }

  // Getter and setter for the 'students' attribute
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}

export default HolbertonCourse;
