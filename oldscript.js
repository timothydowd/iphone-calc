

    



    var inputArray = []; //when keys pressed they are stored here
    var calculationArray = [];//when operator pressed number and operator stored here

    var lastOpPos = ""; // last operator to be pressed
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
        else if(e.target.className === "operatorKeys divide"){
          keyCapture = "/";

          operate("/");

          
        }

        else if(e.target.className === "operatorKeys equals"){
          operate("=");
        }
        
      }
        e.stopPropagation(); //stops function bubbling up through parent div
    }


    
    

    function add(firstValue,secondValue){
      return a + b;
    }

    function subtract(firstValue,secondValue){
      return a-b;
    }

    function divide(firstValue,secondValue){
      return (firstValue/secondValue);
    }
  
    function multiply(a,b){
      return a*b;
    }	

    

    
    function operate(operator){

      if (operator === add){
        return add(a,b);
      }

      else if(operator === subtract){
        return subtract(a,b);
      }

      else if(operator === "/"){
        calculationArray.push(inputArray.join(""));//stores first number to be calculated
        calculationArray.push(keyCapture);//stores operator to be used in calculation
        inputArray = []; //clears array for new number
        if(calculationArray.length>2){
          var arrayLength = calculationArray.length;//stores length of array
          lastOpPos = arrayLength - 3;//gets position of the last op key press in array
          firstValue = arrayLength - 4;//gets position of first no in calculation
          secondValue = arrayLength - 2;//gets position of second number in calculation
          if(calculationArray[lastOpPos] === "/"){ //calls function to do calculation and overwrites last number in array with the result
            calculationArray[secondValue] = divide(calculationArray[firstValue],calculationArray[secondValue]);
            displayString.innerText = calculationArray[secondValue];

            console.log(calculationArray);
            }
            
            

          }
        return;
      }

      else if (operator === multiply){
        return multiply(a,b);
      }

      else if(operator === "="){
        calculationArray.push(inputArray.join(""));//stores first number to be calculated
        inputArray = []; //clears array for new number
        if(calculationArray.length>2){
          var arrayLength = calculationArray.length;//stores length of array
          lastOpPos = arrayLength - 2;//gets position of the last op key press in array
          firstValue = arrayLength - 3;//gets position of first no in calculation
          secondValue = arrayLength - 1;//gets position of second number in calculation
          if(calculationArray[lastOpPos] === "/"){ //calls function to do calculation and overwrites last number in array with the result
            calculationArray[secondValue] = divide(calculationArray[firstValue],calculationArray[secondValue]);
            displayString.innerText = calculationArray[secondValue];

            console.log(calculationArray);
            }
            

          }  

        return;
      
      }


    }


    


  