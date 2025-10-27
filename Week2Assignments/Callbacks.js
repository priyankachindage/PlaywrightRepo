// 1. Declare a global variable
let browser = "Chrome";

// 2. Function that accepts a callback and simulates a delay
function checkBrowserVersion(callback) {
  setTimeout(() => {
    callback(browser)
  }, 2000); // 2-second delay
}

// 3. Callback function to log the browser version
function logBrowserVersion(version) {
  console.log(`Browser version of: ${browser} is 141.0.7390.123`)
}

// 4. Call the function with the callback
checkBrowserVersion(logBrowserVersion)