let a = "[{[[()]}]", b = [], missingBracketObj = {};

//Find
b = a.split("");
count = 0;

console.log("b", b.length / 2);

for (let k = 0; k <= Math.round(b.length / 2); k++) {
    i = b.length % 2 == 0 ? 1 : 0;
    if (b[k] == '<') {
        if (b[b.length - k - i] !== '>') {
            b[b.length - k - i] = '>';
            count = count + i;
            missingBracketObj[k] = '>';
        }
    }
    if (b[k] == '{') {
        if (b[b.length - k - i] !== '}') {
            b[b.length - k - i] = '}';
            count = count + i;
            missingBracketObj[k] = '}';
        }
    }
    if (b[k] == '[') {
        if (b[b.length - k - i] !== ']') {
            b[b.length - k - i] = ']';
            count = count + i;
            missingBracketObj[k] = ']';
        }
    }
    if (b[k] == '(') {
        if (b[b.length - k - i] !== ')') {
            b[b.length - k - i] = ')';
            count = count + i;
            missingBracketObj[k] = ')';
        }
    }
}

if (count > 0) {
    console.log("Brackets Missing");
    console.log("Missed Bracket Is: ", missingBracketObj);
    console.log("Properone", b);
}

//Replace proper one
