import { LeapYear } from './leapYear.js'

const leapYear = new LeapYear()

import promptSync from 'prompt-sync'

const prompt = promptSync()

let isValidYear = false

do {
  try {
    const year = prompt('Please enter a year: ')
    console.log('The year you entered is: ' + year)
    const isLeapYear = leapYear.determineLeapYear(year)
    console.log(`Is year a leapyear: ${isLeapYear}`)
  } catch (error) {
    console.log(error)
  }

} while (isValidYear)

/* const year = prompt('Please enter a year: ') */

/* console.log('The year you entered is: ' + year) */

/* const isLeapYear = leapYear.determineLeapYear(year) */

/* console.log(`Is year a leapyear: ${isLeapYear}`) */

