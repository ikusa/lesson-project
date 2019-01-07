//@flow
type Person = {
  name: string;
  age: number;
};

let josh: Person = {
  name: 'josh',
  age: 2,
};
let dono: Person = {
  name: 'dono',
  age: 2,
};
let rani: Person = {
  name: 'rani',
  age: 2,
};
let people = [josh, dono, rani];
function getNames(people: Array<Person>): Array<string> {
  let names: Array<string> = [];
  for (let person of people) {
    names.push(person.name);
  }
  return names;
}

console.log(getNames(people));
