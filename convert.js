// Inch to fit conversion, 
// 12 inch 1 feet

function incToFeet(inch)
{
     return (inch/12);
     

    }
// 
function incToFeet2(inch)
{
     const decimal=inch/12;
     const fraction=inch%12;
     const feetNumber=parseInt(decimal);
     return (feetNumber+' feet '+fraction+' inch');
     
}
// const height=incToFeet(75);
// console.log(height);

const height2=incToFeet2(75);
console.log(height2);
