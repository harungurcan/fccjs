function palindrome(str) {
  let noSpecialChars = str.replace(/[^a-zA-Z0-9 ]/g, '');
  let a = noSpecialChars.replace(/\s/g, '');
  let lower = a.toLowerCase();
  let oldArr = lower.split("");
  let checkArr = oldArr;
  let newArr = [];
  let lengthOfStr = lower.length;
  for (let i = 0; i <= lengthOfStr - 1; i++) {
    newArr[i] = oldArr[lengthOfStr - 1 - i]
  }

  if (JSON.stringify(newArr) == JSON.stringify(checkArr)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
palindrome("adda");