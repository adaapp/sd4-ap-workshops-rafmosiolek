const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Teacher = require('./Teacher');

describe('Class Teacher', () => {
  let name, yearsOfService, subject;

  beforeEach('create a reusable instance of the Student calss', () => {
    name = 'Elvis Presley';
    yearsOfService = 21;
    subject = 'binge drinking'
    testTeacher = new Teacher(yearsOfService, name, subject);
  })

  it('is a class', () => {
    expect(testTeacher).to.be.an.instanceOf(Teacher);
  })
})