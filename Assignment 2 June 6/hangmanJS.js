// function Verify() {
//     const userInput = document.getElementsByClassName("guess").value

//     const answers = {
//         guess1 = "S"
//         guess2 = "T"
//         guess3 = "A"
//         guess4 = "C"
//         guess5 = "K"
//     }
    
    
//     if (userInput !== answers[id]) {
//         document.getElementsByClassName('incorrect')[0].style.display = 'inline';
// }
//     else {
//         document.getElementsByClassName('correct')[0].style.display = 'inline';
//         document.getElementsByClassName('incorrect')[0].style.display = 'none';
//     }
// }


// function Verify() {
//     const answers = {
//         guess1 = "S"
//         guess2 = "T"
//         guess3 = "A"
//         guess4 = "C"
//         guess5 = "K"
//     }

    

//     for(const id in answers) {
//         const userInput = document.getElementsByClassName("guess").value
//         if (userInput !== answers[id]) {
//             document.getElementsByClassName('incorrect')[0].style.display = 'inline';

//         } else {
//             document.getElementsByClassName('correct')[0].style.display = 'inline';
//             document.getElementsByClassName('incorrect')[0].style.display = 'none';
//         }
//     }
// }



function Verify(inputId, expectedValue) {
    const input = document.getElementById(inputId);
    const userInput = input.value

    const correctSpan = document.getElementById("correct-" + inputId);
    const incorrectSpan = document.getElementById("incorrect-" + inputId);

    if (userInput === expectedValue) {
        correctSpan.style.display = 'inline';
        incorrectSpan.style.display = 'none';
    } else {
        correctSpan.style.display = 'none';
        incorrectSpan.style.display = 'inline';
    }
}