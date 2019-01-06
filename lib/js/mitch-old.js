// IsMitchAsleep By Mashhhyyy

///* THIS JS FILE IS NOT USED! *\\\
///* IT WAS THE FIRST VERSION OF IT THOUGH SO IT'S STAYING HERE *\\\

const d = new Date();
const n = d.getUTCHours();

function launch() {

    if (n > 9) {
        const status = 'Asleep';
        const output = status.fontcolor('red');
        document.getElementById('status').innerHTML = output;
    }

    if (n < 9) {
        const status = 'Awake';
        const output = status.fontcolor('green');
        document.getElementById('status').innerHTML = output;
    }

    if (n == 9) {
        document.getElementById('status').innerHTML = 'Going to Bed';
    }
}

function howItWorks() {
    const monkeys = 'A group of highly trained monkeys is sent out when the button is clicked to report to you if he is sleeping or not.';
    document.getElementById('howItWorks-P').innerHTML = monkeys;
}
