import { Alert, Confirm, Prompt } from "./game-framework.js";
/**
 * Week 04 - Control Flow
 */



// Modify the text for the introduction

// Level 1
if(await Confirm(`Do you want to enter the temple?`)) {
    await Alert('Great! Let\'s get started.')
} else {
    await Alert('You decide the risk isn’t worth it. Some mysteries are better left undiscovered.')
    window.location.reload()    
}

let firstChoice = prompt("After entering the mysterious temple, three passages stand before you. You can follow the main hall, take the hidden passage, or investigate the side room. (Type 'main hall', 'side room', or 'hidden passage').")

if (firstChoice === 'main hall'){
    if(await Confirm("You stumble across a large guardian and behind him is a shiny relic, you can either confront the guardian or try to steal the relic. Do you want to confront the guardian?")) {
        await Alert('The temple’s guardian tests your worth. You answer its riddles and prove yourself, gaining the relic’s true power.')
        window.location.reload()    
    } else {
        await Alert('The moment you touch the relic, the temple shakes. A curse takes hold, and you are forever trapped in the ruins as its new guardian.')
        window.location.reload()    
    }
}else if (firstChoice === 'hidden passage'){
    if(await Confirm("You enter through the hidden passage, you come across a large door with engravings. You can either force the door open or try to solve the puzzle. Do you want to force the door open?")) {
        await Alert('You seize the relic, but the temple’s defenses activate. You barely escape, only to realize the artifact is cursed.')
        window.location.reload()    
    } else {
        await Alert('The puzzle hums as you complete it. Instead of taking the relic, you are granted a vision of past and future, leaving as a prophet.')
        window.location.reload()    
    }
}else{
    if(await Confirm("You enter the side room, only to find a bunch of ancient murals and a mysterious mechanism. You can either examine the murals closer or activate the mechanism. Do you want to examine the murals closer?")) {
        if(await Confirm("You stumble across the a shiny relic, do you take it?")) {
            await Alert('The moment you touch the relic, the temple shakes. A curse takes hold, and you are forever trapped in the ruins as its new guardian.')
            window.location.reload()    
        } else {
            await Alert('Instead of taking the relic, you transcribe its knowledge and share it with the world.')
            window.location.reload()    
        }
    } else {
        await Alert('The walls begin to shake, and the entire structure collapses. You and the temple are lost to history.')
        window.location.reload()    
    }
}   