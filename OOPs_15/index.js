// In javascript a class can be defined by how many ways?


// 1️⃣ Class Declaration


class Person {
  constructor(name) {
    this.name = name;
  }
}



// 2️⃣ Class Expression


const Person = class {
  constructor(name) {
    this.name = name;
  }
};



// In JavaScript, class elements can be characterized by three main aspects:

// 1️⃣ Field (Property) Type
// ➡ Instance fields — belong to instances (e.g., this.name = 'John')
// ➡ Static fields — belong to the class itself (e.g., static count = 0)

// 2️⃣ Method Type
// ➡ Instance methods — methods called on class instances
// ➡ Static methods — methods called on the class itself

// 3️⃣ Visibility (Access Level)
// ➡ Public — accessible everywhere (default in JS)
// ➡ Private — starts with # and accessible only within the class (e.g., #secret)

