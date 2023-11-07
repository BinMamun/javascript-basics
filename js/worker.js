function summetion(){
    let sum = 0;
    for (let i = 1; i <= 1000000000; i++) {
      sum += i;
    }
    postMessage(sum);
}
summetion();