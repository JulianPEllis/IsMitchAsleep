// IsMitchAsleep By Mashhhyyy

///* UTC TIME IS USED! NOT UTC + 11 AS IT CAUSES ISSUES. *\\\

const d = new Date();
const n = d.getUTCHours(); // Assigns n to UTC Hour, UTC time is used.
let switchOn = false; // Sets switch status to off
let howSwitch = false; // Sets how switch to off

function launch() { // Function that fires when 'Find out' button is pressed

    if (switchOn == false) {
        if (n > 11) { // Is time greater than 11?
            const status = 'Asleep'; // Sets status to asleep
            const output = status.fontcolor('red'); // Colors status as output
            document.getElementById('status').innerHTML = output; // Sets Element 'status' to variable 'output'
    }

        else { // Awake implementation
            const status = 'Awake'; // Sets status to awake
            const output = status.fontcolor('green'); // Colors status as output
            document.getElementById('status').innerHTML = output; // Sets Element 'status' to variable 'output'
    }
    
    switchOn = true; // Turns the switch on, to show button is in use.
    }
    
    else if (switchOn == true) { // If the switch is on while pressed
    document.getElementById('status').innerHTML = ''; // Clear status message.
    
    switchOn = false; // Turns switch off.
    }
    }

function howItWorks() { // Function for the how it works button
    if (howSwitch == false) { // If switch is off when clicked.
        // Change the paragraph to this.
        document.getElementById('howItWorks-P').innerHTML = 'A team of highly trained monkeys goes to his house and sees if he is sleeping or not, then reports back to you!';

    howSwitch = true; // Set switch on to true
}
else if (howSwitch == true) {   // If switch is on when pressed
    document.getElementById('howItWorks-P').innerHTML = ''; // Clears the 'how it works' paragraph

    howSwitch = false; // Sets switch to off.
}
}
// Feel free to use. With credit.
