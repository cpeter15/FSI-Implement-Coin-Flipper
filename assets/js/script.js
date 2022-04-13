// TODO: Declare any global variables we need
let totalRolls = 0
let num1 = 0
let percent1 = 0
let num2 = 0
let percent2 = 0
let num3 = 0
let percent3 = 0
let num4 = 0
let percent4 = 0
let num5 = 0
let percent5 = 0
let num6 = 0
let percent6 = 0
let rollButton = document.querySelector("#roll")
let clearButton = document.querySelector("#clear")
let diceImg = document.querySelector("#diceImg")
let statusMsg = document.querySelector("#statusMsg")
let outcome



    // TODO: Add event listener and handler for flip and clear buttons
    rollButton.addEventListener("click",function(){
        rollDice()
    })
    clearButton.addEventListener("click",function(){
        clearScoreboard()
    })
    // Flip Button Click Handler
    function rollDice(){
        outcome = Math.ceil(Math.random() * 6);
        
        switch(outcome){
            case 1:
                diceImg.setAttribute("src", "./assets/images/dice/dice1.png");
                statusMsg.textContent = "You Rolled a 1";
                break;
            case 2:
                diceImg.setAttribute("src", "./assets/images/dice/dice2.png");
                statusMsg.textContent = "You Rolled a 2";
                break;
            case 3:
                diceImg.setAttribute("src", "./assets/images/dice/dice3.png");
                statusMsg.textContent = "You Rolled a 3";
                break;
            case 4:
                diceImg.setAttribute("src", "./assets/images/dice/dice4.png");
                statusMsg.textContent = "You Rolled a 4";
                break;
            case 5:
                diceImg.setAttribute("src", "./assets/images/dice/dice5.png");
                statusMsg.textContent = "You Rolled a 5";
                break;
            case 6:
                diceImg.setAttribute("src", "./assets/images/dice/dice6.png");
                statusMsg.textContent = "You Rolled a 6";
                break;  
        }
        calculateTotals(outcome);
        updateScoreboard();
    }
    function calculateTotals(rolledValue){
        totalRolls++
        switch(rolledValue){
            case 1:
                num1++
                break;
            case 2:
                num2++
                break;
            case 3:
                num3++
                break;
            case 4:
                num4++
                break;
            case 5:
                num5++
                break;
            case 6:
                num6++
                break;  
        }
        percent1 = Math.round(num1/totalRolls * 100)
        percent2 = Math.round(num2/totalRolls * 100)
        percent3 = Math.round(num3/totalRolls * 100)
        percent4 = Math.round(num4/totalRolls * 100)
        percent5 = Math.round(num5/totalRolls * 100)
        percent6 = Math.round(num6/totalRolls * 100)
    }
    function updateScoreboard(){
            document.querySelector("#ones").textContent = num1
            document.querySelector("#twos").textContent = num2
            document.querySelector("#threes").textContent = num3
            document.querySelector("#fours").textContent = num4
            document.querySelector("#fives").textContent = num5
            document.querySelector("#sixes").textContent = num6
            document.querySelector("#ones-percent").textContent =`${percent1}%`
            document.querySelector("#twos-percent").textContent =`${percent2}%`
            document.querySelector("#threes-percent").textContent =`${percent3}%`
            document.querySelector("#fours-percent").textContent =`${percent4}%`
            document.querySelector("#fives-percent").textContent =`${percent5}%`
            document.querySelector("#sixes-percent").textContent =`${percent6}%`
    }
    function clearScoreboard(){
        totalRolls = 0 
        num1 = 0
        percent1 = 0
        num2 = 0
        percent2 = 0
        num3 = 0
        percent3 = 0
        num4 = 0
        percent4 = 0
        num5 = 0
        percent5 = 0
        num6 = 0
        percent6 = 0
        statusMsg.textContent = "Lets Get Rolling!";
        updateScoreboard()
    }
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

