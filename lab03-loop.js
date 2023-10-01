//bai 1
//câu a
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let dodaimang=arr.length
let test = arr.length -1
// console.log(arr[11])
function cau_a(){
    for (let i=0; i<dodaimang; i++){
        console.log('Phan tu thu ',i,arr[i])
    }
}
//câu b
function cau_b(){
    let a=0
    for (let i=0; i<dodaimang; i++){
        a=a+arr[i]
    }
    console.log(a)

}
//câu c
function cau_c(){
    max =0
    min=100
    for (let i =0 ; i<dodaimang; i++){
        if (arr[i]>max){
            max=arr[i]}
        if (arr[i]<min){
            min=arr[i]}
    }
    console.log('so lon nhat',max)
    console.log('so nho nhất',min) 
}
//câu d
function cau_d(){
    let a=0
    for (let i=0 ; i<dodaimang; i++){
        a=a+arr[i]
        b=i
    }
    let trung_binh_cong=a/b
    console.log(trung_binh_cong)
}
//câu e
function cau_e(){
    for (let i=-1 ; i>=-dodaimang; i--){
        so_cuoi=dodaimang+i
        // console.log(so_cuoi)
        console.log(arr[so_cuoi])
    }
}
// cau_e()