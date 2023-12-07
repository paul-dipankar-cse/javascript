/*
Date

JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch). 
*/
let myDate = new Date()
// console.log(myDate);                        
// //2023-12-07T18:42:23.650Z
// console.log(myDate.toString());
// //Thu Dec 07 2023 18:42:23 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());
// //Thu Dec 07 2023
// console.log(myDate.toLocaleDateString());
// //12/7/2023
// console.log(myDate.toLocaleTimeString());
// //6:42:23 PM
// console.log(myDate.toJSON());
// //2023-12-07T18:42:23.650Z
// console.log(myDate.toUTCString());
// //Thu, 07 Dec 2023 18:42:23 GMT
// console.log(myDate.toTimeString());
// //18:42:23 GMT+0000 (Coordinated Universal Time)

// console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 11, 8) //Fri Dec 08 2023
let myCreatedDate = new Date("08-12-2023")
// console.log(myCreatedDate.toDateString()); //Sat Aug 12 2023

// console.log(myCreatedDate.toLocaleString('en-IN'));  //12/8/2023, 12:00:00 am

let myTimeStamp = Date.now()

// console.log(myTimeStamp);       //1701975160287
// console.log(myCreatedDate.getTime());       //1691798400000
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth()); //11

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));                                            //Thursday