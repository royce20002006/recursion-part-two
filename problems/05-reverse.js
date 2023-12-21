/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


// function reverse(str, n = str.length - 1, reversed = '') {

//   if (str.length === 0) return reversed;

//   if (n === 0) {
//     return reversed + str[n];
//   }
//   reversed += str[n];
//   return reverse(str, n - 1, reversed);
// };

function reverse(str, i = str.length - 1, res = '') {

  if (i < 0) {
    return res
  }
  res += str.slice(i,i + 1)

  return reverse(str, i - 1, res)

}



reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
