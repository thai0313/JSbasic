let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let dodaimang=arr.length

// do{
//     let j=i+1
//     do{
//         if (arr[i]>arr[j]){
//             let tam =arr[i]
//             arr[i]=arr[j]
//             arr[j]=tam
//         }
//         j++
//     }while (j<dodaimang)
//     i++
// }while (i<dodaimang)
//cau d
// let tong=0
// let i=0
// do{
//     tong=tong+arr[i]
//     i=i+1
// }while(i <dodaimang)
// console.log ('cau d', tong/dodaimang)
// function caue(){
//     let i=0
//     let j=arr.length-1
//     let temp =0
//     do {
//         temp= arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         i=i+1
//         j=j-1
//     }while(i<j)
// console.log (arr)
// }
function cau_f(){
    const tanSuatXuatHien={}
    let i=0
    do{
        const phanTuThuI= arr[i];
        tanSuatXuatHien[phanTuThuI]=(tanSuatXuatHien[phanTuThuI]||0)+1
        i=i+1
        }while(arr[i]!==undefined)
    console.log(tanSuatXuatHien)
    }  
// cau_f()
function cau_g2(){
    let i= dodaimang-1
    do {
        arr[i+1]=arr[i]
        i=i-1
    }while(i>=0)
    arr[0]=117
    console.log(arr)
}
// cau_g2()
function cau_h(){
    let tangDan=true
    let i=0
    do{
        if (arr[i]>arr[i+1]){
            tangDan=false
            break
        }
        i=i+1
    }while (arr[i]!==dodaimang)
    if (tangDan===true){
        console.log('mang tang dan')
    }
    else {
        console.log('mang ko tang dan')
    }
}
cau_h()