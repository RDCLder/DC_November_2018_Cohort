// Challenge 1

function collatzSequence(n) {
    
    var sequence = [];

    if (n <= 0) {
        return n;
    }
    else {
        while (n != 1) {
            if (n % 2 == 0) {
                n = n / 2;
                sequence.push(n);
            }
            else {
                n = n * 3 + 1;
                sequence.push(n);
            }
        }
        return sequence;
    }
}

// console.log(collatzSequence(17))

// ------------------------------------------------------------------------------------

// Challenge 2

function largestPalindrome (n1, n2) {

    var palindromes = [];
    
    for (var i = 1; i <= n1 + 1; i ++) {
        for (var j = 1; j <= n2 + 1; j ++) {
            var product = (i * j).toString();
            var reverse = product.split("").reverse().join("");
            if (product == reverse) {
                palindromes.push(product);
            }
        }
    }
    return Math.max.apply(null, palindromes);
}

// console.log(largestPalindrome(999, 999))

// ------------------------------------------------------------------------------------

// Challenge 3

function smallestDivisible (n) {

    var product = 1;

    for (var i = 2; i <= n; i ++) {
        product = product * i;
    }

    for (var i = n; i <= product; i++) {
        var check = true;
        for (var j = 2; j <= 20; j ++) {
            if (i % j != 0) {
                check = false;
                break;
            }
        }
        if (check) {
            return i;
        }
    }
}

// console.log(smallestDivisible(20));

// ------------------------------------------------------------------------------------

// Challenge 4

