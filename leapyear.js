// Year that is not divisible by 100 and if the year is divisible by 4: then it will be leap year

function isLeapYear(year)
{
    if (year%100!==0 && year%4===0) {
        return true;
    }
    else if (year%100===0 && year%400===0) {
        return true;
    }
    else{
        return false;
    }
}

const isLeap=isLeapYear(2052);
console.log(isLeap);
