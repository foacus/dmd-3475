import { Alert, Confirm, Prompt } from "./game-framework.js";
/**
 * Week 04 - Control Flow
 */



// Modify the text for the introduction
await Alert('Welcome to my game. Answer questions and complete tasks to escape the room!')

let name = await Prompt("What is your name?")

// Level 1
if(await Confirm(`Hi ${name}. Do you want to play the game?`)) {
    await Alert('Great! Let\'s get started.')
} else {
    await Alert('That\'s too bad. Maybe next time.')
    window.location.reload()    
}

