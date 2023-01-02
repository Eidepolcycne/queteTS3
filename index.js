var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        return this.name;
    };
    Person.prototype.tellMyAge = function () {
        return this.age;
    };
    return Person;
}());
var person1 = new Person("John", 40);
var person2 = new Person("Mary", 35);
