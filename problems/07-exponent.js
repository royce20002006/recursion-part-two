/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125

base power === 0
recursive step power - 1
num*num
return result
***********************************************************************/

function exponent(num, power, result = 1) {
    if (power === 0) return result;
    if (power < 0) {
    num = 1 / num
    power *= -1
    }
    result *= num;
    return exponent(num, power - 1, result);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = exponent;
} catch (e) {
    module.exports = null;
}
