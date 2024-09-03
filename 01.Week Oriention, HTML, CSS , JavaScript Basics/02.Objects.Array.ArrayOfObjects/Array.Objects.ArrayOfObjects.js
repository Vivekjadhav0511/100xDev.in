

// Objects

let user = {
	name: "Harkirat",
	age: 19
}

console.log("Harkirats age is " + user.age);

// Arrays - Arrays let you group data together

const users = ["harkirat", "raman", "diljeet"];
const tatalUsers = users.length;
const firstUser = users[0];

// Array of Objects - We can have more complex objects, for example an array of objects

const usersOne = [{
    name: "Harkirat",
    age: 21
}, {
    name: "raman",
    age: 22
}]

const user1 = users[0] 
const user1Age = users[0].age

// Object of Objects

const userObject = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user1.address.city;