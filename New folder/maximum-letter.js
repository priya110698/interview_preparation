console.log("hi");

const name = "PRIYANKA", nameOj = {};

name.split('').forEach(element => {
    nameOj[element] ? nameOj[element] += 1 : nameOj[element] = 1;
});

let maxLetter = 0, key = '';

for (nameKey in nameOj) {
    if (maxLetter < nameOj[nameKey]) {
        maxLetter = nameOj[nameKey];
        key = nameKey;
    }
}

console.log("maxLetter", maxLetter, "letter is", key);