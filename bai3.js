let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let dodaimang=arr.length
let i=0
do{
    let j=i+1
    do{
        if (arr[i]>arr[j]){
            let tam =arr[i]
            arr[i]=arr[j]
            arr[j]=tam
        }
        j++
    }while (j<dodaimang)
    i++
}while (i<dodaimang)
console.log(arr)