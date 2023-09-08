//get the values from the page
//starts or controller function
function getValues(){
    //get values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //Validate input
    //Parse into integer
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        //call generateNumbers
        let numbers = generateNumbers();
        //call displayNumbers
        displayNumbers(numbers, fizzValue, buzzValue);
    }else{
        alert("You must enter integers.");
    }
}


//generate numbers from 1 to 100
//logic function(s)
function generateNumbers(){

    let numbers = [];

    //get all numbers from the start to the end
    for (let i = 1; i <= 100; i++) {

        //this will execute until the i(index) gets 100
        numbers.push(i);
        
    }

    return numbers;

}

//display the multiples of 3 as "Fizz", display the multiples of 5 as "Buzz", and display the multiples of 3 and 5 as "FizzBuzz"
//display or view functions
function displayNumbers(numbers, fizzValue, buzzValue){

    let templateRows="";

    for (let index = 0; index < numbers.length; index++) {
 
        let displayText = numbers[index];

        if(displayText % fizzValue == 0 && displayText % buzzValue == 0){
            displayText = "FizzBuzz";
        }
        else if(displayText % fizzValue == 0){
            displayText = "Fizz";
        }
        else if(displayText % buzzValue == 0){
            displayText = "Buzz";
        }

        //check if index is a multiple of 5 (meaning we completed one row) and start a new row
        if (index % 5 === 0){
            templateRows += index !== 0 ?'</tr>' : '';
            //If it's not the first item, close the previous row.
            templateRows += '<tr>';
        }

        templateRows += `<td>${displayText}</td>`;

        //If it's the last item and not a perfect multiple of 5, close the last row
        if (index === numbers.length - 1){
            templateRows += '</tr>'
        }
    }

    document.getElementById("results").innerHTML = templateRows;
}
