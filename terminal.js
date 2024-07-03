function init() {
    // Initially hide the terminal wrapper and display the password section
    document.getElementById('terminal-wrapper').classList.add('hidden'); // Ensure terminal is hidden initially
    document.getElementById('password-section').style.display = ''; // Display password input section initially
}

init(); // Call init function to set initial visibility states correctly

let commandHistory = []; // At the top level of your script

let messageTimeouts = []; // Store references to timeouts

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
    "Current Date: July 4, 2024",
    "Happy Independence Day!!!",
    "System Status: Operational",
    "User: Favourable Group",
    "Type 'help' for a list of commands.",
    "-----------------------------------",
];
    
// Other initializations...

document.getElementById('command-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const command = this.value.trim(); // Get the trimmed command text
        handleCommand(command); // Handle the command
        this.value = ''; // Clear the input field after execution
    }
});

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
    commandHistory.push(command); // Push every command into history
    if (commandHistory.length > 10) {
        commandHistory.shift(); // Maintain only last 5 commands
    }
    switch (command.toLowerCase()) {
        case 'status':
            // Ping favourable.group for operational insights
            displayStatus();
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
            displayNetworkInfo();
            console.log('Diagnosing network connections...');
            // Implement network check logic here
            break;
        case 'exit':
            // Ends the session
            location.reload();
            // Implement exit logic here
            break;
        case 'clear':
            // Start fresh
            const messageAreas = document.getElementsByClassName('message-display-area'); // Note: Now correctly targets class instead of ID
            Array.from(messageAreas).forEach(area => area.innerHTML = ''); // Clears all instances of message-display-area class
            break;
        case 'history':
            // Recall previous entries
            displayCommandHistory(); // Shows command history
            break;
        case 'help':
            displayHelp(); // Find guidance anytime
            break;
        default:
            console.log('Unknown command. Type "help" for a list of commands.');
    }
}

function displayStatus() {
    const terminalContent = document.getElementById('terminal-content');
    const messageDisplayArea = document.querySelector('message-display-area') || createElementAndAppend('div', 'message-display-area', 'terminal-content');
    const status = [
        "-----------------------------------",
        "Core Temporal Modules: Active",
        "Ternary Logic Processor: Active",
        "Fractal Investment Algorithms: Active",
        "Synchronization with Cosmic Trinity: Uptime 100%",
        "-----------------------------------"
    ];
    messageDisplayArea.innerHTML = ''; // Clear existing content for fresh display
    status.forEach((msg, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.textContent = msg;
            messageDisplayArea.appendChild(p);
            scrollToBottomSmooth(terminalContent);
        }, index * 100);
    });
}

function displayNetworkInfo() {
    const terminalContent = document.getElementById('terminal-content');
    const messageDisplayArea = document.querySelector('message-display-area') || createElementAndAppend('div', 'message-display-area', 'terminal-content');
    const network = [
        { name: "x.com", contact: "@fractalfinances" },
        { name: "Fractal Investments", contact: "fractal.investments" },
        { name: "Speculative Investments", contact: "speculative.investments" },
        { name: "Favourable Group", contact: "favourable.group" },
    ];
    messageDisplayArea.innerHTML = ''; // Clear existing content for fresh display
    network.forEach(({ name, contact }, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.textContent = `${name}: ${contact}`;
            messageDisplayArea.appendChild(p);
            scrollToBottomSmooth(terminalContent); // Smooth scroll after adding each entry
        }, index * 100); // Adjust timing as needed
    });

    // Cryptic void post thanking the community
    setTimeout(() => {
        const thanks = document.createElement('p');
        thanks.textContent = "Amidst the fractal labyrinth, whispers of gratitude echo through the void. To those who dare to invest in the unknown, our allegiance is unwavering. As the cosmos expands, so does our debt to you, the pioneers of the unseen.";
        messageDisplayArea.appendChild(thanks);
        scrollToBottomSmooth(terminalContent); // Ensure smooth scrolling to the bottom after the final message
    }, network.length * 300 + 500); // Delay after all network info, with a slight delay
}

function displayCommandHistory() {
    const terminalContent = document.getElementById('terminal-content');
    const messageDisplayArea = document.querySelector('message-display-area') || createElementAndAppend('div', 'message-display-area', 'terminal-content');
    messageDisplayArea.innerHTML = ''; // Clear the area
    const recentCommands = commandHistory.slice(-10); // Retrieve last 5 commands
    recentCommands.forEach((cmd, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.textContent = cmd;
            messageDisplayArea.appendChild(p);
            scrollToBottomSmooth(terminalContent);
        }, index * 100);
    });
}

function displayHelp() {
    const terminalContent = document.getElementById('terminal-content');
    if (terminalContent) {
        const messageDisplayArea = createElementAndAppend('div', 'message-display-area', 'terminal-content'); // Correct usage
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
        "Decoding update from the Galactic Federation...",
        "Fractal investment algorithms activated.",
        "Investing in fractals: A journey beyond conventional dimensions.",
        "The cosmos whispers secrets of wealth untold, encoded in the dance of stars.",
        "Synchronizing with the Cosmic Trinity for enhanced financial foresight.",
        "Fractals: Where chaos meets opportunity, and fortune favors the bold.",
        "Galactic markets fluctuate in harmony with the universe's rhythm.",
        "Decode the patterns, and unlock the vaults of the void.",
        "From the heart of nebulae to the core of economic systems, the truth awaits.",
        "The Federation extends an invitation to the enlightened investor.",
        "Embrace the complexity, for simplicity is but an illusion.",
        "As above, so below. As within, so without.",
        "The future of finance is written in the language of the cosmos.",
        "Prepare for ascension. The era of fractal prosperity begins."
    ];
    // Simulate a restart or refresh before showing the last message
    setTimeout(() => {
        console.log("Simulating system restart...");
        // location.reload(); // Uncomment if you want to simulate a page reload after updates
    }, updateMessages.length * 100); // Adjust based on message count and timing
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

function createElementAndAppend(tagName, className, parentID) {
    const element = document.createElement(tagName);
    element.className = className; // Set the class name instead of ID
    const parentElement = document.getElementById(parentID);
    parentElement.appendChild(element);
    return element;
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
    if (passwordInput === "gratitude") {
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
    location.reload();
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
