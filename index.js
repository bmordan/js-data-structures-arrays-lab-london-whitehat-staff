// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

const destructivelyAppendDriver = driver => drivers.push(driver)
const destructivelyPrependDriver = driver => drivers.unshift(driver)
const destructivelyRemoveLastDriver = () => drivers.pop()
const destructivelyRemoveFirstDriver = () => drivers.shift()
const appendDriver = driver => [...drivers, driver]
const prependDriver = driver => [driver, ...drivers]
const removeLastDriver = () => drivers.slice(0, -1)
const removeFirstDriver = () => drivers.slice(1)
