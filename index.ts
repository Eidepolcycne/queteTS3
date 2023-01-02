class Person {
  private name: string;
  private age: number;

   constructor(name : string, age : number) {
      this.name = name;
      this.age = age;
    }

    public tellMyName(): string {
      return this.name;
    }
    public tellMyAge(): number {
      return this.age;
    }

  
}
const person1 = new Person("John", 40);
const person2 = new Person("Mary", 35);

