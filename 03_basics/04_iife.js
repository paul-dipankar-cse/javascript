// Immediately Invoked Function Expression (IIFE)

(function one(){        //named IIFE
    console.log(`DB Connected`);
})();                           //semi-colon after iife is mandatory otherwise gives error to next IIFE statement

( (name) => {           //Unnamed IIFE
    console.log(`DB Connected Two ${name}`);        //parameters can be used like this 
})('dipankar')