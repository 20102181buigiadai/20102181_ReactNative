// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against eachother 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//data
var data = [
  {
    dolphins: {
      scores: [96, 108, 89]
    },
    koalas: {
      scores: [88, 91, 110]
    }
  },
  {
    dolphins: {
      scores: [97, 112, 101]
    },
    koalas: {
      scores: [109, 95, 123]
    }
  },
  {
    dolphins: {
      scores: [97, 112, 101]
    },
    koalas: {
      scores: [109, 95, 106]
    }
  }
]

// Hàm tính trung bình điểm
function calculateAverage (point) {
  const sum = point.reduce((acc, score) => acc + score, 0)
  return sum / point.length
}

// Hàm kiểm tra người chiến thắng và in kết quả ra console
function checkWinner (dolphinsScores, koalasScores) {
  var dolphinsAverage = calculateAverage(dolphinsScores)
  var koalasAverage = calculateAverage(koalasScores)

  if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
    console.log('Dolphins win!')
  } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
    console.log('Koalas win!')
  } else if (
    dolphinsAverage === koalasAverage &&
    dolphinsAverage >= 100 &&
    koalasAverage >= 100
  ) {
    console.log("It's a draw!")
  } else {
    console.log('No one wins the trophy.')
  }
}

// Kiểm tra từng set dữ liệu
for (var i = 0; i < data.length; i++) {
  var dolphinsScores = data[i].dolphins.scores
  var koalasScores = data[i].koalas.scores
  console.log(`+ Round ${i + 1}:`)
  checkWinner(dolphinsScores, koalasScores)
}