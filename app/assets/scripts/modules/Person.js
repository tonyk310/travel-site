class Person {
	constructor(fullName, favColor){
		this.name = fullName;
		this.favColor = favColor;
	}


	greet(){
		console.log("HI THERE my name is " + this.name + " my favorite color is " + this.favColor);
	}
}

// module.exports = Person;
export default Person;