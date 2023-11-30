export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.validateString(name, 'Name');
    this._length = HolbertonCourse.validateNumber(length, 'Length');
    this._students = HolbertonCourse.validateArray(students);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = HolbertonCourse.validateString(name, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = HolbertonCourse.validateNumber(length, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = HolbertonCourse.validateArray(students);
  }

  static validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  static validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  static validateArray(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    return value;
  }
}
