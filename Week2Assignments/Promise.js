// Function that returns a Promise
function fetchDataFromDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = false // Simulate data availability

      if (data) {
        resolve("Data fetched successfully!")
      } else {
        reject("Data not found!")
      }
    }, 3000); // 3-second delay
  });
}

// Call the function and handle the Promise
fetchDataFromDatabase()
  .then((message) => {
    console.log(message); // If resolved
  })
  .catch((error) => {
    console.log(error); // If rejected
  })