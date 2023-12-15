//-----------------global variables ---------------------
//output number
let currentValue = 44
let outputNum = currentValue;
const numberArray = [];

//-----------------Button Connections ---------------------
function buttonPress(){
    console.log("A button has been pressed")
}

                    //Other buttons
//Clear button
let clearClick = document.getElementById("btnClear");
clearClick.addEventListener("click", clearAll);

//Equals button
let equalsClick = document.getElementById("btnEquals");
equalsClick.addEventListener("click", convertEquals);


                    //Operator buttons
//Addition button-------------------
let addClick = document.getElementById("btnAdd");
addClick.addEventListener("click", arrayAddition);

//Add + to array
function arrayAddition(){
    if (numberArray.length === 0 || typeof numberArray[numberArray.length - 1] !== 'string'){
    numberArray.push ("+");
    //Show on display    
    showDisplay();
    } else {console.log("+ cant be placed twice in a row")
    } console.log(numberArray)}

//Subtract button------------------
let subtractClick = document.getElementById("btnSubtract");
subtractClick.addEventListener("click", arraySubtraction);

//Add - to array
function arraySubtraction(){
    if (numberArray.length === 0 || typeof numberArray[numberArray.length - 1] !== 'string'){
    numberArray.push ("-");
    //Show on display    
    showDisplay();
    } else {console.log("- cant be placed twice in a row")
    } console.log(numberArray)}

//Multiply button-------------------
let multiplyClick = document.getElementById("btnMultiply");
multiplyClick.addEventListener("click", arrayMultiplication);

//Add * to array
function arrayMultiplication(){
    if (numberArray.length === 0 || typeof numberArray[numberArray.length - 1] !== 'string'){
    numberArray.push ("*");
    //Show on display    
    showDisplay();
    } else {console.log("* cant be placed twice in a row")
    } console.log(numberArray)}

//Divide button--------------------
let divideClick = document.getElementById("btnDivide");
divideClick.addEventListener("click", arrayDivision);
//Add / to array
function arrayDivision(){
    if (numberArray.length === 0 || typeof numberArray[numberArray.length - 1] !== 'string'){
    numberArray.push ("/");
    //Show on display    
    showDisplay();
    } else {console.log("/ cant be placed twice in a row")
    } console.log(numberArray)}

                    //Number buttons
//0 button---------------
let zeroClick = document.getElementById("btn0");
zeroClick.addEventListener("click", arrayZero);

///Add 0 to array
function arrayZero(){
    numberArray.push (0);
    console.log(numberArray)
    //Show on display    
    showDisplay();
    } 

//1 button---------------
let oneClick = document.getElementById("btn1");
oneClick.addEventListener("click", arrayOne);

///Add 1 to array
function arrayOne(){
    numberArray.push (1);
    console.log(numberArray)
    //Show on display    
    showDisplay();
    } 

//2 button---------------
let twoClick = document.getElementById("btn2");
twoClick.addEventListener("click", arrayTwo);

//Add 2 to array
function arrayTwo(){
    numberArray.push (2);
    console.log(numberArray)
   //Show on display    
   showDisplay();
} 

//3 button----------------
let threeClick = document.getElementById("btn3");
threeClick.addEventListener("click", arrayThree);

//Add 3 to array
function arrayThree(){
    numberArray.push (3);
    console.log(numberArray)
    //Show on display    
    showDisplay();
} 

//4 button----------------
let fourClick = document.getElementById("btn4");
fourClick.addEventListener("click", arrayFour);

//Add 4 to array
function arrayFour(){
    numberArray.push (4);
    console.log(numberArray)
   //Show on display    
   showDisplay();
} 

//5 button---------------
let fiveClick = document.getElementById("btn5");
fiveClick.addEventListener("click", arrayFive);

//Add 5 to array
function arrayFive(){
    numberArray.push (5);
    console.log(numberArray)
    //Show on display    
    showDisplay();
} 

//6 button
let sixClick = document.getElementById("btn6");
sixClick.addEventListener("click", arraySix);

//Add 6 to array
function arraySix(){
    numberArray.push (6);
    console.log(numberArray)
   //Show on display    
   showDisplay();
} 

//7 button
let sevenCLick = document.getElementById("btn7");
sevenCLick.addEventListener("click", arraySeven);

//Add 7 to array
function arraySeven(){
    numberArray.push (7);
    console.log(numberArray)
   //Show on display    
   showDisplay();
} 

//8 button
let eightClick = document.getElementById("btn8");
eightClick.addEventListener("click", arrayEight);

//Add 8 to array
function arrayEight(){
    numberArray.push (8);
    console.log(numberArray)
   //Show on display    
   showDisplay();
} 
//9 button
let nineClick = document.getElementById("btn9");
nineClick.addEventListener("click", arrayNine);

//Add 9 to array
function arrayNine(){
    numberArray.push (9);
    console.log(numberArray)
    //Show on display    
    showDisplay();
    } 
//---------------------------------------------------

//convert output string into numbers
function convertEquals(){
    let outputFormula = numberArray.join('');
    console.log(`output forumula: ${outputFormula}`)
    
    let outputResult = new Function('return ' + outputFormula)();
    console.log(outputResult)
    showDisplayResult();

//modifies display to show the result
function showDisplayResult() {
    let doesArrayHaveSums = numberArray; 

    if (doesArrayHaveSums.includes('+')) {
        applyClick();
    } else if (doesArrayHaveSums.includes('-')) {
        applyClick();
    } else if (doesArrayHaveSums.includes('*')) {
        applyClick();
    } else if (doesArrayHaveSums.includes('/')) {
        applyClick();
    } else {
        console.log("The array doesn't include +, -, *, or / so wont calculate");
    }
}


function applyClick(){
let equalsClick = document.getElementById("btnEquals");
equalsClick.addEventListener("click", convertEquals);

        let showing = outputResult
        let numResultOutputWindow = document.getElementById("outputText")
        numResultOutputWindow.textContent = showing;

        }
    }

//Clear window with C
function clearAll(){
numberArray.length = 0;
//Show on display    
showDisplay();
clearDisplay();
}

//Show numbers on display
function showDisplay(){
    let screenDisplay = numberArray.join('');
    let numResultOutputWindow = document.getElementById("outputText")
    numResultOutputWindow.textContent = screenDisplay;
    }
//Clear display
    function clearDisplay(){
    let defaultZero = document.getElementById("outputText")
    defaultZero.textContent = 0
    }
    clearDisplay();


    




























/*
//addition
function addition(){
let result1 = (currentNumber1 + currentNumber2);
console.log(result1) 
}


//subtraction
function subtraction(){
    let result2 = (currentNumber1 - currentNumber2);
    console.log(result2) 
}

//division
function division(){
    let result3 = (currentNumber1 / currentNumber2);
    console.log(result3) 
}


//multiplcation
function multiplcation(){
    let result4 = (currentNumber1 * currentNumber2);
    console.log(result4) 
}

addition();
subtraction();
division();
multiplcation();
//operate - equals button
function operate(){
    document.getElementById("equals")
    
}


//display output



//clear contentt

*/




