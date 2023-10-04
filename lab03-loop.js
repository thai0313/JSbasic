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
    }
    let trung_binh_cong=a/dodaimang
    console.log(trung_binh_cong)
}
// cau_d()
//câu e
function cau_e(){
    let arr2=[]
    for (let i=-1 ; i>=-dodaimang; i--){
        so_cuoi=dodaimang+i
        // console.log(so_cuoi)
        arr2.push(arr[so_cuoi])
        
    }
    console.log(arr2)
}
// cau_e()
//câu f
function cau_f(){
    const tanSuatXuatHien={};
    for (let i = 0; i <dodaimang;i++){
        const phanTuThuI= arr[i];
        tanSuatXuatHien[phanTuThuI]=(tanSuatXuatHien[phanTuThuI]||0)+1
        }
    console.log(tanSuatXuatHien)
    }  
// cau_f()
//câu g
function cau_g1(){
    arr.unshift(117)
    console.log(arr)
}
function cau_g2(){
    for (let i = dodaimang-1; i >=0;i--){
        arr[i+1]=arr[i]
    }
    arr[0]=117
    console.log(arr)
}
// cau_g2()
//câu h
function cau_h(){
    let tangDan=true
    for (let i = 0; i <dodaimang;i++){
        if (arr[i]>arr[i+1]){
            tangDan=false
            break
        }
    }
    if (tangDan===true){
        console.log('mang tang dan')
    }
    else {
        console.log('mang ko tang dan')
    }
}
// cau_h()
//câu i
function cau_i(){
    for (let j=0;j<dodaimang;j++){
        for (let i = 0; i <dodaimang;i++){
            if (arr[i]>arr[i+1]){
                temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
            }
        }
    }
    console.log(arr)
}
cau_i()
//câu j
function cau_j(){
    for (let j=0 ;j< dodaimang;j++){
        for (let i=0; i<dodaimang;i++){
            if (arr[i]<arr[i+1]){
                temp=arr[i+1]
                arr[i+1]=arr[i]
                arr[i]=temp
            }
        }
    }
    console.log(arr)
}
cau_j()
//câu k
function cau_k(){
    for (let i = 0; i <dodaimang;i++){
        if (arr[i]%2==0){
            console.log(arr[i])
        }
    }
}
// cau_k()
function cau_l(){
    for (let i = 0; i <dodaimang;i++){
        if (arr[i]%2!=0){
            console.log(arr[i])
        }
    }
}
// cau_l()
//câu 2
arr2=[5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
//câu a
function cau_2a(){

}