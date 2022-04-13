// TODO: Declare any global variables we need
let totalFlips = 0
let numHead = 0
let percentHead = 0
let numTail = 0
let percentTail = 0
let filpButton = document.querySelector("#flip")
let clearButton = document.querySelector("#clear")
let coinImg = document.querySelector("#coinImg")
let statusMsg = document.querySelector("#statusMsg")
let isHead = true



    // TODO: Add event listener and handler for flip and clear buttons
    filpButton.addEventListener("click",function(){
        filpCoin()
    })
    clearButton.addEventListener("click",function(){
        clearScoreboard()
    })
    // Flip Button Click Handler
    function filpCoin(){
        isHead = Math.round(Math.random() * 100);
        
        if(isHead % 2 === 0){
            coinImg.setAttribute("src", "./assets/images/penny-heads.jpg");
            statusMsg.textContent = "You Flipped Heads";
        }else{
            coinImg.setAttribute("src", "./assets/images/penny-tails.jpg");
            statusMsg.textContent = "You Flipped Tails";
        }
        calculateTotals(isHead);
        updateScoreboard(numHead,percentHead,numTail,percentTail);
    }
    function calculateTotals(isHead){
        totalFlips++
        if(isHead % 2 === 0){
            numHead++
        }else{
            numTail++
        }
        percentHead = Math.round(numHead/totalFlips * 100)
        percentTail = Math.round(numTail/totalFlips * 100)
    }
    function updateScoreboard(heads, headsPercent, tails, tailsPercent,){
            document.querySelector("#heads").textContent = heads
            document.querySelector("#tails").textContent = tails
            document.querySelector("#heads-percent").textContent =`${headsPercent}%`
            document.querySelector("#tails-percent").textContent =`${tailsPercent}%`
    }
    function clearScoreboard(){
        totalFlips = 0
        numHead = 0
        numTail = 0
        percentHead = 0
        percentTail = 0
        statusMsg.textContent = "Lets Get Flipping!";
        updateScoreboard(numHead,percentHead,numTail,percentTail)
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

