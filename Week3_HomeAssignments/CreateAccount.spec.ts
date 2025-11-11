import test, { expect } from'@playwright/test'//test-fixture

test("Create a Lead",async({page})=>{

//Go to URL
await page.goto("https://login.salesforce.com/")

//Enter username using getByLabel
await page.getByLabel("username").fill("dilipkumar.rajendran@testleaf.com")

//Enter password using getByLabel 
await page.getByLabel("password").fill("TestLeaf@2025")

//Click Login
await page.locator("#Login").click();
await page.waitForTimeout(2000)

//Verify the title and url of the page using appropriate assertions
const actTitle = await page.title()
const expTitle = "Home | Salesforce"
await expect(page).toHaveTitle(expTitle)
await expect(page).toHaveURL(/home/)

//Click App Launcher using the class locator 
await page.locator("//div[@class='slds-icon-waffle']").click()

//Click View All using getByText 
//await page.getByText('View All',{exact:true}).nth(1).click()
await page.locator("//button[text()='View All']").click()
await page.waitForTimeout(2000)

//Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
await page.getByPlaceholder("Search apps or items...").fill("Service")

//Click Service using index based XPath
await page.locator("(//mark[text()='Service'])[1]").click()

//Click Accounts using attribute based CSS selector
await page.locator("a[title='Accounts']").click()

//Click New using getByRole
await page.getByRole('button',{name:'New'}).click()

//Enter Account name using attribute based CSS selector 
await page.locator("input[name='Name']").fill("TestLeaf Account")

//Click Save button using XPath
await page.locator("//button[@name='SaveEdit']").click()

//Verify the toast message displayed
const toast = page.locator(".toastMessage")
  await expect(toast).toBeVisible()
  await expect(toast).toHaveText(/was created/)

})