//  Calculate The Average Of The Odd Numbers In An Array

function averageOdd(a) {
    let sum=0,odCount=0;
    for (let index = 0; index < a.length; index++) {
        if (a[index]%2!==0) {
            sum+=a[index];
            odCount++;
        }
        
    }
    return (sum/odCount);
}

const a=[2,5,9,6,3,7,8,9,5,2];
const result=averageOdd(a);
console.log('Average of odd number is: '+result.toFixed(2));