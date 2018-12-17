
// var product = (17 * 48).toString();
// var reverse = product.split("").reverse().join("");
// console.log(product, reverse);

// var num = [1, 2, 3, 4, 5];

// console.log(Math.max.apply(null, num));

function smallestDivisible (n) {

    n = 20;
    var product = 1;
    var arr = Array.apply(null, {length: n + 1}).map(Number.call, Number);
    arr.shift();

    for (var i = 2; i <= n; i ++) {
        product = product * i;
    }

    for (var i = 20; i <= product; i++) {
        var check = true;
        for (var e = 2; e <= 20; e++) {
            if (i % e != 0) {
                check = false;
                break; // stop testing other divisors
            }
        }
        if (check) {
            return i;
        }
    }
}

console.log(smallestDivisible(20));