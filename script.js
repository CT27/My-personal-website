// Require the jsdom library
const { JSDOM } = require('jsdom');

// Your original script code
const scriptCode = `
getElementById("menu-toggle").addEventListener("click", function() {
    var menu = getElementById("menu");
    menu.classList.toggle("active");
});
`;

// Create a DOM environment using jsdom
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="menu-toggle">Menu Toggle</div><ul id="menu"></ul></body></html>');

// Extract window and document from the DOM
const { window } = dom;
const { document } = window;

// Set up a function to run the script code within the DOM environment
function runScript(scriptCode) {
    const script = new window.Function(scriptCode);
    script();
}

// Run the script within the DOM environment
runScript(scriptCode)
