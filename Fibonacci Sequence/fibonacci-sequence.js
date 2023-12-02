const fibonacci = (n) => {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacciSequence = (n) => {
    let sequence = [0];
    for (let i = 1; i <= n; i++) sequence.push(fibonacci(i));
    return sequence.slice(0, n);
}

const fibonacciSequenceRecursion = (n) => {
    if (n <= 2) return [0, 1];
    let sequence = fibonacciSequenceRecursion(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
}


console.log(fibonacci(8));
console.log(fibonacciSequence(8));
console.log(fibonacciSequenceRecursion(8));
