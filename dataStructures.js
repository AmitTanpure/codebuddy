// level {1/2/3}

// Level 2

// qustion 1

const arr = [1, 3, 4, 6, 7, 8];

function removeEvenNumber(arr) {
	for (i = 0; i < arr.length; ++i) {
		let even = arr[i] % 2 == 0;
		if (even) {
			arr.splice(i--, 1);
		}
	}
}
removeEvenNumber(arr);
console.log(arr);

// ouput--  [1, 3, 7]

//   question 3

const maxNum = () => {
	let array = [1, 3, 4, 6, 7, 8, 9, 2, 5];
	array.sort((a, b) => {
		return b - a;
	});
	console.log(array[0]);
	return array[0];
};
maxNum();

// quetion 2

const upperCase = () => {
	let string = "Elie";
	let UpdatedString = string.toUpperCase();
	console.log(UpdatedString);
	return UpdatedString;
};
upperCase();
