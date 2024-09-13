export class LeapYear {

  /**
   * Checks if year is a leap year.
   *
   * @param {*} year
   * @return {boolean} 
   * @memberof LeapYear
   */
  determineLeapYear(year) {
    let leapYear = false

    if (this.isYear(year)) {
      throw new Error('Your input is not a valid year.')
    }

    if (year % 4 === 0) {
      leapYear = true
    }
    return leapYear
  }

  /**
   *  Checks if eyar is a positive number 
   * @param {*} year 
   * @returns 
   */
  isYear(year) {
    if (typeof year === 'number' && year >= 0) {

      return true
    }
    return false
  }
}