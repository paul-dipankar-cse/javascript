// for of
const arr = [1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('IN','India')

// console.log(map);       //Map(2) { 'IN' => 'India', 'USA' => 'United States of America' }

for (const key of map) {
    // console.log(key);
}
//[ 'IN', 'India' ]
//[ 'USA', 'United States of America' ]

for (const [key, value] of map) {
    // console.log(key,':' ,value);
}
//IN : India
//USA : United States of America