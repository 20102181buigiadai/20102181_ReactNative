// Coding Challenge #9
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
// days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

// Dữ liệu kiểm tra
var data = [
  {
    forecast: [17, 21, 23],
    printForecastOfData: function () {
      printForecast(this.forecast)
    }
  },
  {
    forecast: [12, 5, -5, 0, 4],
    printForecastOfData: function () {
      printForecast(this.forecast)
    }
  }
]

// Hàm in dự báo thời tiết
function printForecast (arr) {
  var forecastString = ''
  for (var i = 0; i < arr.length; i++) {
    forecastString += `... ${arr[i]}°C in ${i + 1} day(s) `
  }
  console.log(forecastString)
}

// Test data
data.forEach(function (data, index) {
  console.log(`- § Data ${index + 1}: [${data.forecast}] `)
  data.printForecastOfData()
  console.log('')
})
