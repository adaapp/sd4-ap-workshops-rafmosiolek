const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Student = require('./Student');

describe('Class Student', () => {
  let name;

  beforeEach('create a reusable instance of the Student calss', () => {
    name = 'Elvis Presley';
    testStudent = new Student(name);
  })

  it('is a class', () => {
    expect(testStudent).to.be.an.instanceOf(Student);
  })
})
