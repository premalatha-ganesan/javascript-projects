//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';
fox.job = 'astronaut'

console.log(fox);
console.log(fox.age, fox.color);
console.log(fox.job);

//Try modifying or adding properties below.