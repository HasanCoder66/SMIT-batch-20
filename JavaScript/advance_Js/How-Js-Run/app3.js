console.log("Global Execution Context Start -->")

setTimeout(function a () {
console.log("I'm inside of setTimeout...")
}, 0)

Promise.resolve().then(function b () {
    console.log("this is from micro task queue.. one")
})


console.log("Global Execution Context End -->")