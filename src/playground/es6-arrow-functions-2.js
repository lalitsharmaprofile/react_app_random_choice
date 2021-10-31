// Example:- 1
const user = {
	name: 'Lalit Sharma',
	cities: ['Delhi', 'Dehradun'],
	getPlacesVisit: function(){
		const that = this;
		this.cities.forEach(function (city){
			// console.log(this.name + ' has visited ' + city);  //gives error
			console.log(that.name + ' has visited ' + city);  //requries work around
		})
	}
}

user.getPlacesVisit()

function getThis(){
	// this is undefined since it is not bound to fx
	console.log("this", this);
}
getThis()

const car = {
	name: 'Tesla',
	printName: function (){
		// fx within object have access to parent object's this
		console.log(this.name); //works fine

		// but in Ex: 1, there was another fx with getPlacesVisit 
			// that is forEach's function argurment
			// now this is not bound to parent function (since it is not bound to fx at all)
			// it was not accessible within fx to print cities visited !
	}
}

car.printName()

// In es6, this keyword is no longer bound to obejct
const userEs6 = {
	name: 'Lalit Sharma',
	cities: ['Delhi', 'Dehradun'],
	getPlacesVisit: function(){
		this.cities.forEach((city) => {
			// here in this arrow fx, this works
			console.log(this.name + ' has visited ' + city);  //requries work around
		})
	}
}
userEs6.getPlacesVisit()

// // Just a Note: Don;t confuse that below code should work, it won't
// const userEs6Test = {
// 	name: 'Lalit Sharma',
// 	newName: this.name
// }
// console.log("newName", userEs6Test.newName);

// what if outer fx is also converted to es6
try{
	console.log("try");
	const userEs6New = {
		name: 'Lalit Sharma',
		cities: ['Delhi', 'Dehradun'],
		getPlacesVisit: () => {
			// the above fx defination gives error at below line, this.cities.forEach since no "this" for parent object which is the current js file itself and not the user object like fx within forEach
			this.cities.forEach((city) => {
				// here in this arrow fx, this works
				console.log(this.name + ' has visited ' + city);  //requries work around
			})
		}
	}

	userEs6New.getPlacesVisit()

}
catch(err){
	console.log("catch");
	// to fix above issue
	const userEs6NewFix = {
		name: 'Lalit Sharma',
		cities: ['Delhi', 'Dehradun'],
		getPlacesVisit: function() {
			// basically reverted back, since can't convert this one to arrow fx, but can write getPlacesVisit(), see below example
			this.cities.forEach((city) => {
				// here in this arrow fx, this works
				console.log(this.name + ' has visited ' + city);  //requries work around
			})
		}
	}

	userEs6NewFix.getPlacesVisit()
}

// simple and efficient
const userEs6NewFixUpdate = {
	name: 'Lalit Sharma',
	cities: ['Delhi', 'Dehradun'],
	getPlacesVisit() {
		// basically reverted back, since can't convert this one to arrow fx, but can write getPlacesVisit(), see below example
		this.cities.forEach((city) => {
			// here in this arrow fx, this works
			console.log(this.name + ' has visited ' + city);  //requries work around
		})
	}
}

userEs6NewFixUpdate.getPlacesVisit()

const multiplier = {
	numbers: [1, 6],
	multiplyBy: 2,
	multiply(){
		return this.numbers.map((n) => n * this.multiplyBy);
	}
}
console.log(multiplier.multiply())