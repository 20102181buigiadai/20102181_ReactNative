// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks height 78 kg and is 1.69 m tall. John height 92 kg and is 1.95 m tall.
// § Data 2: Marks height 95 kg and is 1.88 m tall. John height 85 kg and is 1.76 m tall

var data = [
  {
    Mark: {
      height: 78,
      mass: 1.69,
    },
    John: {
      height: 92,
      mass: 1.95,
    },
  },
  {
    Mark: {
      height: 95,
      mass: 1.88,
    },
    John: {
      height: 85,
      mass: 1.76,
    },
  },
];

// function
function getBMI(height, mass) {
  return mass / (height * height); // return mass/(height^2)
}

//§ Data 1: Marks height 78 kg and is 1.69 m tall. John height 92 kg and is 1.95 m tall.
var markHigherBMI =
  getBMI(data[0].Mark.height, data[0].Mark.mass) >
  getBMI(data[0].John.height, data[0].John.mass);
console.log(markHigherBMI);

//§ Data 2: Marks height 95 kg and is 1.88 m tall. John height 85 kg and is 1.76 m tall
markHigherBMI =
  getBMI(data[1].Mark.height, data[1].Mark.mass) >
  getBMI(data[1].John.height, data[1].John.mass);
console.log(markHigherBMI);
