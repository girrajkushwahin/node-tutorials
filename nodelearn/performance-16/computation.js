function myLongComputation() {
    let sum = 0;
    for (let i = 0; i < 10 ** 9; i++) sum += i; // 10**9 means 10 power 9
    return sum;
}

process.on('message', (message) => {
    if (message === 'start') {
        const sum = myLongComputation();
        process.send(sum);
    }
})