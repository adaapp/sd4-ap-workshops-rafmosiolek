class Teacher {
  constructor(yearsOfService, name, subject) {
    this.yearsOfService = yearsOfService;
    this.name = name;
    this.initials = this.setInitials();
    this.subject = subject;
  }

  setInitials() {
    // loop through the name and return first letters
    // of names and surname
    return;
  }

  getName() {
    return this.name;
  }

  getInitials() {
    return this.initials;
  }

  getSubject() {
    return this.subject;
  }

  getYearsOfService() {
    return this.yearsOfService;
  }

  setYearsOfService(numberOfYears) {
    this.yearsOfService = numberOfYears;
  }
}

module.exports = Teacher;