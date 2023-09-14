// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, andimprove it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark'sBMI (28.3) is higher than John's (23.9)!"

var data = [
  {
    Mark: {
      mass: 78,
      height: 1.69
    },
    John: {
      mass: 92,
      height: 1.95
    }
  },
  {
    Mark: {
      mass: 95,
      height: 1.88
    },
    John: {
      mass: 85,
      height: 1.76
    }
  }
]

// function
function getBMI (height, mass) {
  return mass / (height * height) // return mass/(height^2)
}

data.forEach(values => {
  const markBMI = getBMI(values.Mark.height, values.Mark.mass)
  const johnBMI = getBMI(values.John.height, values.John.mass)

  if (markBMI > johnBMI) {
    console.log(
      "Mark's BMI (" +
        markBMI.toFixed(2) +
        ") is higher than John's (" +
        johnBMI.toFixed(2) +
        ')!'
    )
  } else if (johnBMI > markBMI) {
    console.log(
      `John's BMI (${johnBMI.toFixed(
        2
      )}) is higher than Mark's (${markBMI.toFixed(2)})!`
    )
  } else {
    console.log(
      `Mark's BMI (${markBMI.toFixed(2)}) and John's BMI (${johnBMI.toFixed(
        2
      )}) are the same!`
    )
  }
})
