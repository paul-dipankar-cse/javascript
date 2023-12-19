const coding = ['js', 'ruby', 'py', 'java', 'cpp']

coding.forEach( function (item) {
    // console.log(item);
}  )
// js
// ruby
// py
// java
// cpp

coding.forEach( (item) => {
    // console.log(item);
})
// js
// ruby
// py
// java
// cpp

function printME(item){
    // console.log(item);
}

coding.forEach(printME)
// js
// ruby
// py
// java
// cpp

coding.forEach((item,index,arr) => {
    // console.log(item,index,arr);
})
// js
// ruby
// py
// java
// cpp
// js 0 [ 'js', 'ruby', 'py', 'java', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'py', 'java', 'cpp' ]
// py 2 [ 'js', 'ruby', 'py', 'java', 'cpp' ]
// java 3 [ 'js', 'ruby', 'py', 'java', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'py', 'java', 'cpp' ]

const mycoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

mycoding.forEach((item) => {
    console.log(item.languageName);
})