const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const YearGroup = require('./YearGroup');

describe('Class YearGroup', () => {
  let year, headOfYear;

  beforeEach('create a reusable instance of the YearGroup class', () => {
    year = 2018;
    headOfYear = "Ms Jones";
    testYearGroup = new YearGroup(year, headOfYear);
  })

  it('is a class!', () => {
    expect(testYearGroup).to.be.an.instanceOf(YearGroup);
  })

  describe('#constructor; check if class is inisitalsed properly', () => {
    it('takes a year and sets is as an attribute', () => {
      expect(testYearGroup.year).to.equal(year);
    })
    
    it('takes a headOfYear and sets is as attribute', () => {
      expect(testYearGroup.headOfYear).to.equal(headOfYear);
    })
  })
})
