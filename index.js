//step 1

function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

Animal.prototype.makeSound = function() {
    console.log(this.sound);
};

//step2

function Dog(name, sound, breed) {
    Animal.call(this, name, sound); // Call parent constructor (Animal)
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add additional methods to Dog prototype
Dog.prototype.fetch = function() {
    console.log(`${this.name} fetches the ball!`);
};


const buddy = new Dog("Buddy", "Woof", "Labrador");

//step3

buddy.makeSound(); // Output: Woof
buddy.fetch();     // Output: Buddy fetches the ball!

