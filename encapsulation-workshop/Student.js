class Student {
  constructor(name) {
    this._name = name;
    this.tutorgroup = this._yearGroup + this._form;
    this._yearGroup;
    this._form;
  }

  getName() {
    return this._name;
  }

  getYearGroup() {
    return this._yearGroup;
  }

  getForm() {
    return this._form;
  }
}

module.exports = Student;