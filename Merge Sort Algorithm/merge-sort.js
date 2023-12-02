const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    return merge(mergeSort(arr.slice(0, arr.length / 2)), mergeSort(arr.slice(arr.length / 2)));
};

const merge = (arrOne, arrTwo) => {
    let result = [];
    while (arrOne.length > 0 && arrTwo.length > 0) {
        if (arrOne[0] > arrTwo[0]) result.push(arrTwo.shift());
        else result.push(arrOne.shift());
    }
    while (arrOne.length > 0) result.push(arrOne.shift());
    while (arrTwo.length > 0) result.push(arrTwo.shift());
    return result;
};

console.log(mergeSort([337, 654, 603, 609, 716, 678, 843, 28]));
