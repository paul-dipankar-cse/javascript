//for in

const myObject = {
    js:'javascript',
    cpp:'c++',
    py:'python',
    rb:'ruby'
}

for (const key in myObject) {
    // console.log(key);
}
// js
// cpp
// py
// rb

for (const key in myObject) {
    // console.log(myObject[key]);
}
// javascript
// c++
// python
// ruby

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
// js shortcut is for javascript
// cpp shortcut is for c++
// py shortcut is for python
// rb shortcut is for ruby

const program = ['js','cpp','py','rb']

for (const key in program) {
    // console.log(key);           
    //0
    // 1
    // 2
    // 3
    // console.log(program[key]);
    // js
    // cpp
    // py
    // rb
}

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('IN','India')

for (const key in map) {
    // console.log(key); //map is not iterator
}