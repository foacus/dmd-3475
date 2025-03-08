const person1 = {
    name: ["Troy", "Hangland"],
    age: 21,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hi! I am ${this.name[0]}.`);
    },
    jump() {
        console.log(`${this.name[0]} can jump ${Math.floor(Math.random() * 10)} feet high!`)
    },
};

const person2 = {
    name: ["Katie", "Gomes"],
    age: 20,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hi! I am ${this.name[0]}.`);
    },
    jump() {
        console.log(`${this.name[0]} can jump ${Math.floor(Math.random() * 10)} feet high!`)
    },
};

//function Person (name) {
  //  this.name = name;
    //this.introduceSelf = function () {
    //  console.log(`Hi! I'm ${this.name}.`);
   // };
  //}
  