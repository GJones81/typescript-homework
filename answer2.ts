let array1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array2: Array<number | string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const findOdds = (array: Array<number | string>): Array<number | string> => {
		let oddArray: Array<number | string> = []
		let evenArray: Array<number | string> = []
		for (let i: number = 0; i < array.length; i++){
			console.log(array.length)
			console.log(i)
			if (i % 2 === 0) {
				evenArray.push(array.shift())
				console.log('evenArray', evenArray)
			}
			else {
				oddArray.push(array.shift())
				console.log('oddArray', oddArray)
			}
		}
		return oddArray
}

console.log(findOdds(array2))