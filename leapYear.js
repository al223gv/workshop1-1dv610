export class LeapYear {

    determineLeapYear (year) {
        let leapYear = false

        if (this.isYear(year)) {
          throw new Error('Your input is not a valid year.')
        }
      
        if (year % 4 === 0) {
          leapYear = true
        }
        return leapYear
      }

    isYear (year) {
      if (typeof year === 'number' && year >= 0) {

        return true
      }
      return false
  }
}