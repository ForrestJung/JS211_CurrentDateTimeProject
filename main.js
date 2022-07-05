// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numToString = () => {
  let num = 15;
  let text = num.toString()
  console.log(text)

  document.getElementById("display-element").innerHTML = (`The typeof the input ${num} is ${typeof num}, the typeof output ${text} is ${typeof text}`);
}



// Write a JavaScript program to convert a string to the number.

const stringToNum = () => {
  let text = '8';
  let num = parseFloat(text);
  console.log(num);

  document.getElementById("display-element").innerHTML = (`The typeof the input ${text} is ${typeof text}, the typeof output ${num} is ${typeof num}`);
}



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

const dataTypes = () => {
  const dataOne = Boolean(10 > 9);
  let dataTwo = null;
  let dataThree;
  const dataFour = 15;
  const dataFive = Math.sqrt(-1);
  const dataSix = 'Ducks';

  document.getElementById("display-element").innerHTML = 
  (`The typeof the input dataOne is ${typeof dataOne} and is ${dataOne}. <br>
  The typeof the input dataTwo is ${typeof dataTwo}. <br> 
  The typeof the input dataThree is ${typeof dataThree}. <br>
  The typeof the input dataFour is ${typeof dataFour}. <br>
  The typeof the input dataFive is ${typeof dataFive} ${dataFive}. <br>
  The typeof the input dataSix is ${typeof dataSix}.`)
}
  

  
// Write a JavaScript program that adds 2 numbers together.

const addTwoNumbers = () => {
  let num1 = 15;
  let num2 = 5;

  const sum = num1 + num2;
  document.getElementById("display-element").innerHTML = (`The typeof the input ${num1} and ${num2} is ${typeof num1} and ${typeof num2}. The output of ${sum} is ${typeof sum}`)
}

// Write a JavaScript program that runs only when 2 things are true.

const twoTrueThings = () => {
  // These two variables will return true
  let thingOne = 1;
  let thingTwo = 2;

  // These two variables will return false
  // let thingOne = 1;
  // let thingTwo = 21;

  if ((thingOne == 1) && (thingTwo == 2)) {
    document.getElementById("display-element").innerHTML = (`The true check shows both thingOne and thingTwo are true`);
  }
  else if ((thingOne != 1) || (thingTwo != 2)) {
    document.getElementById("display-element").innerHTML = (`The true check shows either thingOne or thingTwo is false`);
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrueThing = () => {
  // These two variables will return true
  let thingOne = 1;
  let thingTwo = 2;

  // These two variables will return false
  // let thingOne = 11;
  // let thingTwo = 21;

  if ((thingOne == 1) || (thingTwo == 2)) {
    document.getElementById("display-element").innerHTML = (`At least one thing is true`);
  }
  else if ((thingOne != 1) && (thingTwo != 2)) {
    document.getElementById("display-element").innerHTML = (`Neither thing is true`);
  }
}

// Write a JavaScript program that runs when both things are not true.  

const noTrueThing = () => {
    // These two variables will return false
    // let thingOne = 1;
    // let thingTwo = 2;
  
    // These two variables will return true
    let thingOne = 11;
    let thingTwo = 21;
  
    if ((thingOne != 1) && (thingTwo != 2)) {
      document.getElementById("display-element").innerHTML = (`There is no truth here.`);
    }
    else if ((thingOne == 1) || (thingTwo == 2)) {
      document.getElementById("display-element").innerHTML = (`Truth is hidden here.`);
    }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
