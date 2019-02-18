let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 3, 2, 1];

function checkBalance(arr) {

    // Balanced if size is 0 or 1
    if (arr.length < 2) {
        return true;
    }

    // Balanced if both values are equal
    if (arr.length == 2) {
        if (arr[0] == arr[1]) {
            return true;
        }
    }

    for (let i = 1; i < arr.length; i ++) {
        let leftArr = arr.slice(0, i);
        let rightArr = arr.slice(i, arr.length);
        let leftSum = leftArr.reduce((a, b) => {return a + b});
        let rightSum = rightArr.reduce((a, b) => {return a + b});
        if (leftSum == rightSum) {
            return true;
        }
    }
    return false;
}

console.log(checkBalance(arr1));
console.log(checkBalance(arr2));