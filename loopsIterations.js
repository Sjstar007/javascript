// level {1/2/3}

//      1       //
//    1 2 1
//  1 2 3 2 1
// 1 2 3 4 3 2 1


let num = 5;
for(let i = 1; i < num;i++){ //1 2
    // for(let j = 0; j < num-1; j++){
    //     document.write(" ");
    // }
    for(let k =1;k <= i;k++){ //1 2
       document.write(k)  // 1 12
    }
    for(let x=i-1;x >=1;x--){ //
        document.write(x)+"<br>";
    } //
}