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
    "-----------------------------------",
    "Welcome to the Advanced Terminal Interface.",
    "-----------------------------------",
    "Available Commands:",
    "status - Check system status. Ping favourable.group for operational insights.",
    "reboot - Reboot the system. Refreshes the page for a clean slate.",
    "update - Update system packages. Interprets federation directives for enhancements.",
    "network - Diagnose network connections. Trying to be a good and genuine person.",
    "exit - Close the terminal. Ends the session.",
    "clear - Clear the terminal screen. Start fresh.",
    "history - Show command history. Recall previous entries.",
    "help - Display this help menu. Find guidance anytime."
];

const status = [
    "Welcome to the Advanced Terminal Interface.",
    // ping favourable.group (const status)
];

const reboot = [
    "Welcome to the Advanced Terminal Interface.",
    // refresh page (const reboot)
];

const network = [
    "Welcome to the Advanced Terminal Interface.",
    // show twitter handle @fractalfinances (const network)
];

const exit = [
    "Welcome to the Advanced Terminal Interface.",
    // refresh page (const exit)
];

const clear = [
    "Welcome to the Advanced Terminal Interface.",
    // refresh page (const exit)
];

const history = [
    "Welcome to the Advanced Terminal Interface.",
    // business information (const history)
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

function handleCommand(command) {
    switch (command.toLowerCase()) {
        case 'status':
            // Ping favourable.group for operational insights
            console.log('Checking system status...');
            // Implement actual logic here
            break;
        case 'reboot':
            // Refreshes the page for a clean slate
            location.reload();
            break;
        case 'update':
            // Applies federation directives for enhancements
            displayUpdate();
            // Implement update logic here
            break;
        case 'network':
            // Show Twitter handle @fractalfinances for social media presence
            console.log('Diagnosing network connections...');
            // Implement network check logic here
            break;
        case 'files':
            // List available files
            console.log('Listing files...');
            // Implement file listing logic here
            break;
        case 'upload <file>':
            // Secure file transfer
            // Implement upload logic here
            break;
        case 'download <file>':
            // Retrieve essential data
            // Implement download logic here
            break;
        case 'exit':
            // Ends the session
            console.log('Closing terminal...');
            // Implement exit logic here
            break;
        case 'clear':
            // Start fresh
            document.getElementById('message-display-area').innerHTML = ''; // Clears the terminal screen
            break;
        case 'history':
            // Recall previous entries
            displayCommandHistory(); // Assuming displayCommandHistory() shows command history
            break;
        case 'help':
            displayHelp(); // Find guidance anytime
            break;
        default:
            console.log('Unknown command. Type "help" for a list of commands.');
    }
}

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
            }, index * 100); // Adjust timing as needed
        });

        const commandInput = document.getElementById('command-input');
        if (commandInput) {
            commandInput.focus(); // Ensure exists before focusing
        }
    }
}

function displayUpdate() {
    const terminalContent = document.getElementById('terminal-content');
    const messageDisplayArea = document.getElementById('message-display-area') || createElementAndAppend('div', 'message-display-area', 'terminal-content');
    const updateMessages = [
        "Initiating system update...",
        "Downloading updates...",
        "Applying update 1 of 3: Security enhancements.",
        "Applying update 2 of 3: Performance optimizations.",
        "Applying update 3 of 3: New functionalities.",
        "Update process complete. System will restart to apply changes."
    ];
    // Simulate a restart or refresh before showing the last message
    setTimeout(() => {
        console.log("Simulating system restart...");
        // location.reload(); // Uncomment if you want to simulate a page reload after updates
    }, updateMessages.length * 300); // Adjust based on message count and timing
    updateMessages.forEach((msg, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.textContent = msg;
            messageDisplayArea.appendChild(p);
            // Smoothly scroll to the bottom after adding each message
            scrollToBottomSmooth(terminalContent);
        }, index * 100); // Timing adjustment for sequential display
    });
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
        }, index * 100); // Adjust timing as needed
    });
}

function scrollToBottomSmooth(container) {
    container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
    });
}

// Example function implementations for the new commands
function displayCommandHistory() {
    const history = ['status', 'reboot', 'update', 'network']; // Example history array
    history.forEach((cmd, index) => {
        setTimeout(() => {
            console.log(cmd); // Display each command after some delay
        }, index * 300);
    });
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