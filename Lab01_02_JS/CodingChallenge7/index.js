// Coding Challenge #7
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the samemethod on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

//data
var data = [
  {
    fullName: 'Mark Miller',
    mass: 78, // kg
    height: 1.69, // m
    calcBMI: function () {
      this.bmi = this.mass / Math.pow(this.height, 2)
      return this.bmi
    }
  },
  {
    fullName: 'John Smith',
    mass: 92, // kg
    height: 1.95, // m
    calcBMI: function () {
      this.bmi = this.mass / Math.pow(this.height, 2)
      return this.bmi
    }
  }
]

// Tính BMI cho cả hai người
data[0].calcBMI()
data[1].calcBMI()

// So sánh và in kết quả ra console
if (data[0].bmi > data[1].bmi) {
  console.log(
    `${data[0].fullName}'s BMI (${data[0].bmi.toFixed(2)}) is higher than ${
      data[1].fullName
    }'s (${data[1].bmi.toFixed(2)})!`
  )
} else if (data[0].bmi < data[1].bmi) {
  console.log(
    `${data[1].fullName}'s BMI (${data[1].bmi.toFixed(2)}) is higher than ${
      data[0].fullName
    }'s (${data[0].bmi.toFixed(2)})!`
  )
} else {
  console.log(
    `${data[0].fullName} and ${
      data[1].fullName
    } have the same BMI (${data[0].bmi.toFixed(2)})!`
  )
}
