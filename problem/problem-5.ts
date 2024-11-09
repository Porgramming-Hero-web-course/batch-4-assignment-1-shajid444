// create a generic function

// by using extend  i use T object as a parent object of key

// keyof is use as a constrain
function getProperty<T, Key extends keyof T>(object: T, propertyValue: Key): T[Key] {
    return object[propertyValue];
}

// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:Alice


