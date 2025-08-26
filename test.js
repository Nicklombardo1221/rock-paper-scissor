function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdownOnce() {
    await sleep(150); console.log("Countdown begins");
    let countdown = 10;
    while (countdown > 0) {
        console.log(countdown);
        countdown--;
        await sleep(1500); // 1000 ms = 1 second
    }
    await sleep(150); console.log("Countdown ends");
}

(async () => {
    for (let i = 0; i < 3; i++) {
        await countdownOnce();
    }
})();