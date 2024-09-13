import { LeapYear } from './leapYear.js'

const leapYear = new LeapYear()

import promptSync from 'prompt-sync'

const prompt = promptSync()

let isValidYear = false

do {
  try {
    const year = prompt('Please enter a year: ')
    
    if (year === '') {
      throw Error('Enter a valid year')
    }
    console.log('The year you entered is: ' + year)
    const isLeapYear = leapYear.determineLeapYear(year)
    console.log(`Is year a leapyear: ${isLeapYear}`)

    // Log next leap year
    if (isLeapYear) {
      const intYear = parseInt(year)
      console.log(`Next leap year is in: ${intYear + 4}`)
    }
  } catch (error) {
    console.log(error)
  }

} while (isValidYear)

