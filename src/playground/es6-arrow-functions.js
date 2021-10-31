console.log("arrow fx");
// Task: get first name

// const getFirstName = function (name){
// 	return name.split(' ')[0];
// }
function getFirstName(name){
	return name.split(' ')[0];
}
const name = 'Lalit Sharma';
console.log("First name:", getFirstName(name));

// const getFirstNameArrow = (name) => {
// 	return name.split(' ')[0];
// }


const getFirstNameArrow = (name) => name.split(' ')[0];

console.log("First name:", getFirstNameArrow(name));
