const isPalindrome = (x) => {
    const numberToString = x.toString();
    const reversedString = numberToString.split("").reverse().join("");
    return numberToString === reversedString;
};
