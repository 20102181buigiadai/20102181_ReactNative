// CAU 1
console.log("Thử thách viết mã số 1")
    // data
var data = [{
    "Mark": {
        chieuCao: 78,
        khoiLuong: 1.69,
    },
    "John": {
        chieuCao: 92,
        khoiLuong: 1.95,
    }
}, {
    "Mark": {
        chieuCao: 95,
        khoiLuong: 1.88,
    },
    "John": {
        chieuCao: 85,
        khoiLuong: 1.76,
    }
}]
console.log("data: " + data.toString);

// function
function tinhBMI(chieuCao, khoiLuong) {
    return khoiLuong / (chieuCao * chieuCao); // return khoiLuong/(chieuCao^2)
}

function tinhmarkHigherBMI(data) {
    var Mark = tinhBMI(data.Mark.chieuCao, data.Mark.khoiLuong)
    var John = tinhBMI(data.John.chieuCao, data.John.khoiLuong)
    return Mark > John //  Mark có chỉ số BMI cao hơn John hay không.
}
var markHigherBMI = tinhmarkHigherBMI(data[0]);
console.log(markHigherBMI)
markHigherBMI = tinhmarkHigherBMI(data[1]);
console.log(markHigherBMI)

////////////////////////////////////////////////
// CAU2
console.log("Thử thách viết mã số 2")
data.forEach((value) => {
    tinhmarkHigherBMI(value) ? console.log("Chỉ số BMI của Mark cao hơn John!") : console.log("Chỉ số BMI của John cao hơn Mark!")
})