const p = new Promise((reslove, reject) => {
    console.log("1");
    console.log("2");
})

p.then(() => {
    console.log("3");
})

console.log("4");