

var arr = [];
do {
    var x = prompt('Введите команду: add/del/stop', "add Иван");
    // console.log(x);
    var y = x.split(" ")
    // console.log(y);  
    if (y[0] == "add") {
        arr.push(y[1])
    } else if (y[0] == "del") {
        for (let key in arr) {
            console.log(key);
            if (arr[key] == y[1]) {
                arr.splice(key, 1)
            }
        }
    }
    // alert(arr)
    console.log(arr);
} while ( y[0] != "stop");

