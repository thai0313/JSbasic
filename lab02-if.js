//bai1
//câu a
function kiemtraamduong(n){
    if (n<0){
        console.log('so n là số âm')
    }
    else if (n>0){
        console.log('Số n là số dương')
    }
    else {
        console.log('số n ko âm ko dương')
    }
}
//câu b
function kiemtrachanle(n){
    if (n/2==0){
        console.log('số n là số chẵn')
    }
    else if (n/2!=0){
        console.log('số n là số lẻ')
    }
    else {
        console.log('số n ko chẵn ko lẻ')
    }
}
//câu c
function timsolon1(a,b,c){ 
    if (a>b && a>c){
        console.log(a,'là số lớn nhất')
    } 
    else if (b>a && b>c){
        console.log(b,'là số lớn nhất')
    }
    else if (c>a && c>b){
        console.log(c,'là số lớn nhất')
    }
}
function timsolon2(a,b,c){
    let max=a
    if (max <b){
        max =b
    }
    if (max >c){
        max =c
    }
    console.log(max)
}
//câu d
function timnamnhuan(n){
    if (n%4==0 && (n%100!=0||n%400==0)){
        console.log(n,'là năm nhuận')
    }
    else {
        console.log(n,'là ko phải năm nhuận')
    }
}
// timnamnhuan(1200)
//câu e
function timphuam(n){
    if (n=='i'||n=='o'||n=='u'||n=='a'||n=='e'){
        console.log(n,'là nguyên âm')
    }
    else {
        console.log(n,'là phụ âm')
    }
}
// let thai=timphuam('a')
// console.log(thai)
//bài 2
//câu a 
function tinhtoan(a,b,c){
    let delta=b**2-4*a*c
    if (a==0 && b==0){
        console.log('phuong trinh vo nghiêm')
    } 
    if (a==0){
       let nghiem=-c/b 
    }
    if (delta<0){
        console.log('phuong trinh vo nghiêm')
    }
    else{
        let nghiem1 =(-b+Math.sqrt(delta))/2*a
        let nghiem2 =(-b-Math.sqrt(delta))/2*a
    }
}
// tinhtoan(1,1,1)
//câu b
function tinhLuong(l){
    if (l<8){
        let thue=0
    }
    else if (8<=l<=15){
        thue=15
    }
    else if (l>=15){
        thue=20
    }
    let thuethunhap=l*(thue/100)
    let lnet=l-thuethunhap
    console.log('thue thu nhap',thuethunhap)
    console.log('luong',lnet)
}
// tinhLuong(10)
//câu c
function xepHocLuc(diem){
    if (diem>=9){
        console.log('hạng A')
    }
    else if (diem>=7 && diem<9){
        console.log('hạng B')
    }
    else if (diem>=5 && diem<7){
        console.log('hạng C')
    }
    else {
        console.log('hạng F')
    }
}
// xepHocLuc(4)
// if (a==1){
//     //nếu thiếu = sẽ thành gán a=1 luôn True code luôn chạy => bug
// }
// if (1==a){
//     //nếu thiếu = thì ko thể gán giá trị cho số sẽ giúp nhận ra lỗi tốt hơn 
// }
//câu d
function tinhGiaCuoc(phut){
    const phi_co_dinh=25000
    let chiphi=0
    if (phut>=0 && phut<=50){
        chiphi=phut*600
    }
    else if (phut>50 && phut <=200){
        chiphi=50*600+(phut-50)*400
    }
    else if (phut>200){
        chiphi=50*600+150*400+(phut-200)*200
    }
    let tong=phi_co_dinh+chiphi
    return tong
}
// console.log(tinhGiaCuoc(170))
