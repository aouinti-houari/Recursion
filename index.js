// Sum all numbers
const sumRange = (n) => {
    if (n === 1) return 1;
    return n + sumRange(n - 1);
}

// Power function
const power = (base, exponent) => {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

// Calculate factorial
const factorial = (n) => {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

// Check all values in an array
const all = (arr, callBack) => {
    let copy = arr.slice();
    if (copy.length === 0) return true;
    if (callBack(copy[0])) {
        copy.shift();
        return all(copy, callBack);
    } else return false;
}

const allAreLessThanSeven = all([1, 2, 9], (n) => n < 7);

// Product of an array
const productOfAnArray = (n) => {
    const copy = n.slice();
    if (copy.length === 0) return 1;
    return copy.shift() * productOfAnArray(copy);
}

const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

// Search JS object
const contains = (obj, value) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') return contains(obj[key], value);
        if (obj[key] === value) return true;
    }
    return false
}

const hasIt = contains(nestedObject, 44); // true
const doesntHaveIt = contains(nestedObject, "foo"); // false

// Parse a multi-dimensional array
const totalIntegers = (array) => { // the function totalIntegers takes an array
    if (array.length === 0) return 0; // this line checks if the array.length is 0 an returns 0 if true
    let total = 0; // this line sets the variable total to 0
    let first = array.shift(); // first is set to the first element of the array
    if (Array.isArray(first)) total += totalIntegers(first); // if first is an array total 
    else if (Number.isInteger(first)) total += 1;
    return total + totalIntegers(array);
}

const seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);

// function that squares numbers and add it to the total
const SumSquares = (arr) => {
    if (arr.length === 0) return 0;
    let total = 0;
    arr.forEach(element => {
        if (Array.isArray(element)) return total += SumSquares(element);
        if (typeof element === "number") total += element * element;
    });
    return total;
}

const l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

const m = [[1, 2], 3];
console.log(SumSquares(m)); // 1 + 4 + 9 = 14

const n = [[[[[[[[[1]]]]]]]]]
console.log(SumSquares(n)); // 1 = 1

const o = [10, [[10], 10], [10]]
console.log(SumSquares(o)); // 100 + 100 + 100 + 100 = 400


// a function that replicate items
const replicate = (times, n) => {
    if (times <= 0) return [];
    return [n].concat(replicate(times - 1, n));
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

// a function that gets the children of a tree
const hasChild = (t) => {
    if (t.children.length === 0) return;
    t.children.forEach(child => {
        console.log(child.name);
        hasChild(child);
    });
}

const tree = {
    name: "Adam",
    children: [
        {
            name: "Cain",
            children: []
        },
        {
            name: "Seth",
            children: [
                // Several generations omitted for brevity
                {
                    name: "Noah",
                    children: [
                        {
                            name: "Shem",
                            children: [
                                // Several generations omitted for brevity
                                {
                                    name: "Abraham",
                                    children: [
                                        {
                                            name: "Isaac",
                                            children: [
                                                {
                                                    name: "Esau",
                                                    children: []
                                                },
                                                {
                                                    name: "Jacob",
                                                    children: [
                                                        // Jacob's lineage leading to David omitted for brevity
                                                        {
                                                            name: "David",
                                                            children: [
                                                                {
                                                                    name: "Solomon",
                                                                    children: []
                                                                }
                                                                // Other descendants of David omitted
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Ishmael",
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Ham",
                            children: []
                        },
                        {
                            name: "Japheth",
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
};

hasChild(tree);

