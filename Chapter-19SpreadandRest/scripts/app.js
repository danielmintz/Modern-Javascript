// rest parameter (bring in any number of items and trun into an array)
const double = (...nums) => {
    console.log(nums)
    return nums.map(num => num *2);
}

const result = double(1,2,4,5,6,7,3,4);
console.log(result);

// spread syntax (arrays)

const people = ['shaun', 'ryu', 'crystal'];
const members = ['mario', 'luigi', ...people];
console.log(members);

// spread syntax (objects)

const person = {name: 'shaun', age: 30, job: 'net ninja'};
const personClone = {...person, location: 'manchester'};
console.log(personClone)

// sets - like an array but doesn't allow duplicates so good way of gettign rid of duplicates

const namesArray =['ryu', 'chin-li','mario', 'shaun', 'ryu'];
console.log(namesArray);

// const nameSet = new Set(['ryu', 'chin-li','mario', 'shaun']);
// const nameSet = new Set(namesArray);
// console.log(nameSet);

// const uniqueNames =[...nameSet];
const uniqueNames =[... new Set(namesArray)]; // does all the above in one. Takes array and removed duplicate as set and vcovnerts back to array
console.log(uniqueNames);

//Methods for sets

const ages = new Set();
ages.add(20);
console.log(ages);
ages.add(15).add(34);
console.log(ages);
ages.add(15); // wont work as duplicate
ages.delete(34);
console.log(ages, ages.size, ages.has(15), ages.has(34));


ages.clear();
console.log(ages);

const ninjas = new Set ([
    {name: 'shaun', age: 30},
    {name: 'crystaln', age: 35},
    {name: 'mario', age: 38}

]);

ninjas.forEach(ninja => {
console.log(ninja.name, ninja.age)
});

//symbols  = each symbol property is unique. So can look the same but isnt

const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const ninja ={}
ninja.age =30;
ninja['belt'] = 'orange';
ninja['belt'] = 'red';

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';


console.log(ninja)

// npn init (ceates package json)