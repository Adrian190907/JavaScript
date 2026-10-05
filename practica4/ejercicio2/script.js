function rest(num1,num2,...num5){
    let total = 0;
    for(const num of num5){
        total += num;
    }
    return total;
}

console.log(rest(1,2,3,4,5))