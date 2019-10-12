const greet = (name) => {
  console.log(` hello ${name}`);
};

greet('Daniel');
greet('Debra');


class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;

  }
}

const newUser = new User('Daniel', 34);
console.log(newUser.name, newUser.age);

greet('Marni');