let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let do_dai = arr.length

function cauA(){
    let i = 0 
    while(arr[i] == undefined){
        console.log(arr[i])
        i = i + 1
    }
}
// cauA()

function cauB(){
    let tong = 0 
    let i = 0 
    while(arr[i] !== undefined){
        tong = tong + arr[i]
        i = i + 1
    }
    console.log("Tong = " + tong)
}
// cauB()

function cauC(){
    let i = 0
    let max = 0
    let min = 100
    while(arr[i] !== undefined){
        i = i + 1
        if(arr[i] > max)
            max = arr[i]

        if(arr[i] < min)
            min = arr[i]

    }
    console.log("Số lớn nhất: ", max)
    console.log("Số nhỏ nhất: ",  min)
} 
// cauC()

function cauD(){
    let i = 0
    let tong = 0
    while(arr[i] !== undefined){
        tong = tong + arr[i]
        i = i + 1
    }
    let tbc = tong / do_dai
    console.log("Trung bình cộng = " + tbc)
}
// cauD()

function cauE(){
    let i = 0 
    let j = do_dai - 1
    let temp = 0
    while(j > i){
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i ++
        j --
}
    console.log("Đảo ngược : ", arr )
}
// cauE()

function cauf(){
    let i = 0
    const tuan_suat_xuat_hien = {};
    while(arr[i] !== undefined){ 
        const phan_tu_I = arr[i]
        tuan_suat_xuat_hien[phan_tu_I] = (tuan_suat_xuat_hien[phan_tu_I] || 0) + 1 
        i ++
    }
    console.log(tuan_suat_xuat_hien)
}
// cauf()

function cauG(){
    let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
    let i = do_dai - 1 // từ số 4 về đến số 3
    while(i >= 0){
        arr[i + 1] = arr[i] // từ phần tử lùi sang
        i --
    }
    arr[0] = 117
    console.log(arr)
}
// cauG()

function cauH(){
    let i = 0
    let checktangdan = true
    while(i < do_dai){
        if(arr[i] > arr[i + 1]){
            checktangdan = false
            break
        }
        i ++
    }
    if(checktangdan == true){
        console.log("Mảng tăng dần")
    }
    else{
        console.log("Mảng giảm dần")
    }
}
// cauH()

function cauI(){
    let i = 0 
    let temp = arr[0]
    while(i < do_dai){
    console.log(arr)
    }
}
// cauI()

function cauJ(){
    let i = 0 
    let j = i + 1
    let temp = arr[0]
    while(i < do_dai, j < do_dai -1){
        // while(j < do_dai -1){
            if(arr[i] < arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        // }
        i ++ 
        j ++
        }
    console.log(arr)
}