
const rotateLeft = (arrayOfAnyLength, Number) => {
    const positionOfNumber = arrayOfAnyLength.indexOf(Number);
    const first = arrayOfAnyLength.splice(0, positionOfNumber + 1);
    const newArray = arrayOfAnyLength.concat(first);
    console.log(newArray)
};

const arrayValue = [1, 2, 3, 4, 5];
rotateLeft(arrayValue, 2)

