function init() {
    // Initially hide the terminal wrapper and display the password section
    document.getElementById('terminal-wrapper').classList.add('hidden'); // Ensure terminal is hidden initially
    document.getElementById('password-section').style.display = ''; // Display password input section initially
}

init(); // Call init function to set initial visibility states correctly

// Define the messages with links
const messages = [
    "Initializing TetraTerminal v1.0.0...",
    "[BOOT SEQUENCE INITIATED]",
    "Loading core modules...",
    "[OK] Core modules loaded successfully.",
    "Verifying system integrity...",
    "[OK] System integrity verified.",
    "Activating Ternary Logic Processor...",
    "[OK] Ternary Logic Processor activated.",
    "Loading fractal investment algorithms...",
    "[OK] Fractal investment algorithms loaded.",
    "Establishing connection to Galactic Federation of Light...",
    "[OK] Connection established.",
    "Synchronizing with Cosmic Trinity (Tian-Di-Ren)...",
    "[OK] Synchronization complete.",
    "Initializing user interface...",
    "[OK] User interface initialized.",
    "Loading Taoist wisdom from the School of Complete Reality...",
    "[OK] Wisdom loaded.",
    "Manifesting Supreme True Reality...",
    "[OK] Supreme True Reality manifested.",
    "Finalizing boot sequence...",
    "[OK] Boot sequence complete.",
    "...",
    "Welcome to TetraTerminal v1.0.0",
    "-----------------------------------",
    "Current Date: July 2, 2024",
    "System Status: Operational",
    "User: Favourable Group",
    "Type 'help' for a list of commands.",
    "-----------------------------------",
];

const help = [
    "Help sequence initialized...",
    "Error: Help augmentation quantum wave function collapse exception...",
    "Note: Contact Galactic Federation Intergalactic Helpline For Assistance",
    "...",
    "Welcome to TetraTerminal v1.0.0",
    "-----------------------------------",
    "Current Date: July 2, 2024",
    "System Status: Operational",
    "User: Favourable Group",
    "Type 'help' for a list of commands.",
    "-----------------------------------",
];

let messageTimeouts = []; // Store references to timeouts

    function createElementAndAppend(tagName, id, parentID) {
        const element = document.createElement(tagName);
        element.id = id;
        document.getElementById(parentID).appendChild(element);
        return element;
    }

        // Other initializations...

    // Setup event listeners
    const commandInput = document.getElementById('command-input');
    if (commandInput) {
        commandInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const command = this.value.trim();
                handleCommand(command);
                this.value = '';
            }
        });
    }

let messageDisplayArea = createElementAndAppend('div', 'message-display-area', 'terminal-content');

function displayHelp() {
    const terminalContent = document.getElementById('terminal-content');
    if (terminalContent) {
        const messageDisplayArea = createElementAndAppend('div', 'message-display-area', 'terminal-content'); // Correct usage
        messageDisplayArea.innerHTML = '';
        help.forEach((msg, index) => {
            setTimeout(() => {
                const p = document.createElement('p');
                p.textContent = msg;
                messageDisplayArea.appendChild(p);
                scrollToBottomSmooth(terminalContent);
            }, index * 300); // Adjust timing as needed
        });

        const commandInput = document.getElementById('command-input');
        if (commandInput) {
            commandInput.focus(); // Ensure exists before focusing
        }
    }
}

function displayMessagesSequentially(messages) {
    const terminalContent = document.getElementById('terminal-content');
    let messageDisplayArea = document.getElementById('message-display-area') || createElementAndAppend('div', 'message-display-area', 'terminal-content');
    messageDisplayArea.innerHTML = ''; // Clear existing messages

    messages.forEach((msg, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.textContent = msg;
            messageDisplayArea.appendChild(p);
            scrollToBottomSmooth(terminalContent);
        }, index * 300); // Adjust timing as needed
    });
}

function scrollToBottomSmooth(container) {
    container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
    });
}

function handleCommand(command) {
    switch (command.toLowerCase()) {
        case 'help':
            displayHelp();
            break;
        default:
            console.log('Unknown command. Type "help" for a list of commands.');
    }
}

document.getElementById('command-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const command = this.value.trim(); // Get the trimmed command text
        handleCommand(command); // Handle the command
        this.value = ''; // Clear the input field after execution
    }
});

function clearMessageTimeouts() {
    messageTimeouts.forEach(timeout => clearTimeout(timeout));
    messageTimeouts = []; // Reset the array
}

let messagesDisplayed = false;

function displayTerminalContent() {
    if (!messagesDisplayed) {
        clearMessageTimeouts(); // Ensure no pending messages are shown
        displayMessagesSequentially(messages);
        document.getElementById('command-input').focus();
        messagesDisplayed = true;
    }
}

function checkPassword() {
    const passwordInput = document.getElementById('mock-password').value.trim().toLowerCase();
    if (passwordInput === "accessgranted") {
        document.getElementById('password-section').style.display = 'none';
        document.getElementById('terminal-wrapper').classList.remove('hidden');
        displayTerminalContent(); // This should now respect messagesDisplayed flag
    } else {
        alert("Incorrect password.");
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
}

document.getElementById('mock-password').addEventListener('keypress', (event) => {
    if (event.key === "Enter") checkPassword();
});

document.getElementById('command-input').addEventListener('focus', function() {
  this.classList.add('blinking-cursor');
}, true);

document.getElementById('command-input').addEventListener('blur', function() {
  this.classList.remove('blinking-cursor');
}, true);

function closeTerminal() {
    document.getElementById('terminal-wrapper').classList.add('hidden');
    document.getElementById('password-section').style.display = '';
    document.getElementById('mock-password').value = '';
    document.getElementById('terminal-content').innerHTML = '';
    messagesDisplayed = false; // Reset to allow messages on reopen
    clearMessageTimeouts(); // Prevent leftover messages
}

function reopenTerminal() {
  // Assuming this function is called when the terminal is reopened
  document.getElementById('terminal-wrapper').classList.remove('hidden'); // Make the terminal wrapper visible
  document.getElementById('command-input').style.display = ''; // Ensure the command input is visible
  // Any other necessary initialization or reset logic goes here
}

// Finally, attach event listeners or call initialization functions

document.getElementById('mock-password').addEventListener('keypress', handleKeyPress);

document.addEventListener('DOMContentLoaded', function() {
  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', closeTerminal);
});