// Code your solution in this file.
function  lowerCaseDrivers (array) {
  return array.map(function (driver) { return driver.toLowerCase() })
}

function nameToAttributes (drivers) {
  return drivers.map(function (driver) {
    const array = driver.split(` `)
    return { firstName: array[0], lastName: array[1] }
  })
}

function attributesToPhrase (drivers) {

  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
