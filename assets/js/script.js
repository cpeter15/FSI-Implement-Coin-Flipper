// TODO: Declare any global variables we need
let totalFlips = 0
let numHead = 0
let percentHead = 0
let numTail = 0
let percentTail = 0
let filpButton = document.querySelector("#flipButton")
let clearButton = document.querySelector("#clearButton")
let coinImg = document.querySelector("#coinImg")
let statusMsg = document.querySelector("#statusMsg")



    // TODO: Add event listener and handler for flip and clear buttons
    filpButton.addEventListener("click",function(){
        filpCoin()
    })
    clearButton.addEventListener("click",function(){
        clearScoreboard()
    })
    // Flip Button Click Handler
    function filpCoin(){
        let outcome = Math.round(Math.random() * 100);
        
        if(outcome % 2 === 0){
            coinImg.setAttribute("src", "./assets/images/penny-heads.jpg");
            console.log(coinImg)
        }else{
            coinImg.setAttribute("src", "./assets/images/penny-tails.jpg");
        }
        updateScoreboard(outcome);
    }
    function updateScoreboard(outcome){
        if (outcome === 1){
            statusMsg.textContent = "You Flipped Heads";
            coinImg
            totalFlips++;
            numHead++;
        }
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

