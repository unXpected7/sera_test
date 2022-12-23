const cekKelereng = (arr) => {
    let nextLeft, nextRight, temp;
    arrLeft = arr.slice(0,2)
    arrRight = arr.slice(3,5)

    sumLeft = arrLeft.reduce((acc, curr) => acc + curr, 0)
    sumRight = arrRight.reduce((acc, curr) => acc + curr, 0)

    if (sumLeft > sumRight){
        nextLeft = arr[0];
        nextRight = arr[1]
        temp = arr[2];
       } else if(sumLeft < sumRight){
        nextLeft = arr[3];
        nextRight = arr[4];
        temp = arr[5];
       } else{
         nextLeft = arr[6];
        nextRight = arr[7];
       }
     if(nextLeft > nextRight){
         return arr.indexOf(nextLeft);
       } 
       else if (nextLeft < nextRight) {
       return arr.indexOf(nextRight);
       }
       else{
       return arr.indexOf(temp);
       }

}
const test1 = [100,100,100,125,100,100,100,100];
const test2 = [100,100,100,100,100,100,100,125]
cekKelereng(test1);
cekKelereng(test2)