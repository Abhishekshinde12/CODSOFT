// selecting the display box and all the buttons in the keypad
let output = document.getElementById('output_box');
let buttons = document.querySelectorAll('button');

// for modifying and calculating the entered equation
let equation = "";
// creating an array of buttons and placing an event listener on each of it
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        try{
            // evaluating the result
            if(e.target.innerHTML == '='){
                equation = eval(equation);
                output.value = equation;
            }
            // clearing the display box
            else if(e.target.innerHTML == 'AC'){
                equation = "";
                output.value = equation;
            }
            // clearing a single character
            else if(e.target.innerHTML == 'DE'){
                equation = equation.substring(0, equation.length-1);
                output.value = equation;
            }
            // for rest , adding the value present in the button tag to the already present string
            else{
                equation += e.target.innerHTML;
                output.value = equation;
            }
        }
        // to catch error like improper use of operators,multiple decimals in a single number,etc
        catch(error)
        {
            alert("Please Enter a valid equation!!!! \n" + "The error occured here is : " + error.message);
        }
        
    })
});