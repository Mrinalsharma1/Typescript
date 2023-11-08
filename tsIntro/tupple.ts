let User: [string, number, boolean]
// User=[true,2,''] //it's allow to strict data type inside the array 
// User = ['d', 1, true]

type rgb = [number, number, number]
let newColor: rgb = [1, 2, 3]
newColor[1] = 23 //we can updated the array index

// newColor.push(true) even we can't push the diffirent data type value 