import test, { expect } from '@playwright/test' 
test("Handle Alert and Frames",async({page})=>{ 

// 1. Load the URL 
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm") 

await page.waitForTimeout(2000) 

// 2. Switch to the frame (iframe with id 'iframeResult') 
const frame = page.frameLocator("#iframeResult") 

// 3. Listen for the alert dialog 
page.on('dialog', async dialog => { 

  console.log("Alert message:", dialog.message()) //Get the alert text 
  
  console.log("Alert type:", dialog.type()) //Get the alert type 
  
  await dialog.accept() //Accept the alert 
  
}) 
  
  // 4. Click "Try it" button inside the frame 
  await frame.getByText("Try it").click() 
  
  // 5. Verify the text after accepting the alert 
  const result = frame.locator("#demo") 
  console.log(result) 
  await expect(result).toHaveText("You pressed OK!") 

})