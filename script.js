    var inputArray = []; //when keys pressed they are stored here

    var lastOperator = ""; 
    
    var firstValue = ""; //first number to be calculated
    var secondValue = ""; // second number to be calculated

    var displayString = document.querySelector(".displayText");
    var keyCapture = "";




    var keysCont = document.querySelector(".keysCont");
    keysCont.addEventListener("click",populateDisplay,false);




    function populateDisplay(e){

      
      if(e.target !== e.currentTarget){ //checks whether the child of keysCont is being clicked or not
        if(e.target.className === "keyZero"){ //sees whick key was clicked
          keyCapture = "0";  //and records the number
          inputArray.push(keyCapture); // adds the number to current display value
          displayString.innerText = inputArray.join(""); // displays the display valu without commas from array
        }
        else if(e.target.className === "keyOne"){
          keyCapture = "1";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyTwo"){
          keyCapture = "2";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyThree"){
          keyCapture = "3";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyFour"){
          keyCapture = "4";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyFive"){
          keyCapture = "5";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keySix"){
          keyCapture = "6";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keySeven"){
          keyCapture = "7";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyEight"){
          keyCapture = "8";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyNine"){
          keyCapture = "9";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
        }
        else if(e.target.className === "keyDecimal"){
          if(inputArray.indexOf(".") == -1){ // makes sure you can't input a decimal twice
          keyCapture = ".";
          inputArray.push(keyCapture); 
          displayString.innerText = inputArray.join("");
          }
          else{
            return;
          }
        }
        else if(e.target.className === "operatorKeys divide"){
          operate("divide");
          
        }
        else if(e.target.className === "operatorKeys multiply"){
          operate("multiply");
          
        }
        else if(e.target.className === "operatorKeys minus"){
          operate("minus");
          
        }
        else if(e.target.className === "operatorKeys add"){
          operate("add");
          
        }
        else if(e.target.className === "operatorKeys equals"){
          operate("equals");
          
        }

        else if(e.target.className ==="miscKeys clear"){ //clears all values when clear button is pressed
          firstValue = "";
          secondValue = "";
          lastValue = "";
          inputArray = [];
          keyCapture = "";
          lastOperator = "";
          displayString.innerText = "";
        }

        else if(e.target.className ==="miscKeys plusMinus"){
          plusMinus();
        }

        
      }
        e.stopPropagation(); //stops function bubbling up through parent div
    }


    
    

    function add(firstValue,secondValue){
      return +firstValue + +secondValue; //unary becasue numbers in string format
    }

    function subtract(firstValue,secondValue){
      return firstValue - secondValue;
    }

    function divide(firstValue,secondValue){
      return firstValue / secondValue;
    }
  
    function multiply(firstValue,secondValue){
      return firstValue * secondValue;
    }	

    

    
    function operate(operator){



      

      if(lastOperator === ""){  // if there arent 2 numbers for calculation then don't do a calculation
        firstValue = inputArray.join(""); 
        lastOperator = operator;
        inputArray = [];
      
      }

      else if(lastOperator === "divide" && inputArray.join("") === "0"){ // stops user dividing by zero
        displayString.innerText = "ERROR";
        return;
      }

      

      else{

        if(lastOperator === "equals"){ // stops new calculation being made after 'equals from equals' scenario which mucks things up
        lastOperator = operator;

      }
        

        else if(lastOperator === "divide"){
          secondValue = inputArray.join("");
          inputArray = [];
          if(secondValue === ""){  //stops error when operator is pressed twice consecutively
            lastOperator = operator;
            return;
          }
          else{
            firstValue = divide(firstValue,secondValue);
            if(firstValue.toString().length >7){   //round decimal if over 7 digits
              displayString.innerText = firstValue.toFixed(5);
              lastOperator = operator;
            }
            else{
              displayString.innerText = firstValue;
              lastOperator = operator;
            }
          }
          
        }

        else if(lastOperator === "multiply"){
          secondValue = inputArray.join("");
          inputArray = [];
          if(secondValue === ""){  
            lastOperator = operator;
            return;
          }
          else{
            firstValue = multiply(firstValue,secondValue);
            if(firstValue.toString().length >7){   
              displayString.innerText = firstValue.toFixed(5);
              lastOperator = operator;
            }
            else{
              displayString.innerText = firstValue;
              lastOperator = operator;
            }
          }
          
        }

        else if(lastOperator === "minus"){
          secondValue = inputArray.join("");
          inputArray = [];
          if(secondValue === ""){  
            lastOperator = operator;
            return;
          }
          else{
            firstValue = subtract(firstValue,secondValue);
            if(firstValue.toString().length >7){   
              displayString.innerText = firstValue.toFixed(5);
              lastOperator = operator;
            }
            else{
              displayString.innerText = firstValue;
              lastOperator = operator;
            }
          }  
          
        }

        else if(lastOperator === "add"){
          secondValue = inputArray.join("");
          inputArray = [];
          if(secondValue === ""){  
            lastOperator = operator;
            return;
          }
          else{
            firstValue = add(firstValue,secondValue);
            if(firstValue.toString().length >7){   
              displayString.innerText = firstValue.toFixed(5);
              lastOperator = operator;
            }
            else{
              displayString.innerText = firstValue;
              lastOperator = operator;
            }
            
          }

        }

      }

      
    }
            
       

    function plusMinus(){ //turns positive number to neg and vice versa

      if(inputArray.join("") > 0){
        inputArray.unshift("-");
        displayString.innerText = inputArray.join("");
      }

      else if(firstValue > 0){
        firstValue = firstValue - (firstValue * 2);
        displayString.innerText = firstValue;
        console.log(firstValue,lastOperator,secondValue);

      }

      else if(inputArray.join("") < 0){
        inputArray.shift();
        displayString.innerText = inputArray.join("");
      }

      else if(firstValue < 0){
        firstValue = firstValue - (firstValue * 2);
        displayString.innerText = firstValue;
        console.log(firstValue,lastOperator,secondValue);

      }


      else{}
    }     

      
     

       