// Fucntion Types
// A Function can be passed into another function

const fTest = (x: number, cbf:(n: number) => void): void => {
    cbf(x);
}

const showResult = (x: number): void => {
    console.log("Result is " + x);
}

fTest(1000, showResult);