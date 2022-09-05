// This is just a normal object.
const obj = {
    name: 'joy',
    roll: 463,
    mobile: 01743727071,
    address: "Brahmonbaria"
}


// this is simle way to get a value object.
const name1 = obj.name;
console.log(name1);

// we can also take value by this.
const { roll } = obj;
const { address, mobile } = obj                  // all in one line.

console.log(roll);
console.log(address);