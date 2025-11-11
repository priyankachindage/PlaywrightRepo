import test, { expect } from'@playwright/test'//test-fixture

test("Create a Lead",async({page})=>{

//Go to URL
await page.goto("http://leaftaps.com/opentaps/control/main")

//Enter the username as ‘Demosalesmanager’ 
await page.locator("//input[@id='username']").fill("DemoSalesManager")
//Enter the password as ‘crmsfa’ 
await page.locator("(//input[@class='inputLogin'])[2]").fill("crmsfa")
//Click the Login button 
await page.locator("//input[contains(@class,'decorative')]").click()
await page.waitForTimeout(2000)
//Click CRM/SFA 
await page.locator("//div[@id='label']").click()
//Click Leads
await page.locator("//a[text()='Leads']").click()
//Click Create Lead 
await page.locator("//a[text()='Create Lead']").click()
//Fill the Company Name 
await page.locator("//input[@id='createLeadForm_companyName']").fill("Analytics Solutions")
//Fill the First Name 
await page.locator("//input[@id='createLeadForm_firstName']").fill("Priyanka")
//Fill the Last Name
await page.locator("//input[@id='createLeadForm_lastName']").fill("Chindage")
//Fill the Salutation 
await page.locator("//input[@id='createLeadForm_personalTitle']").fill("Ms")
//Fill the Title 
await page.locator("//input[@id='createLeadForm_generalProfTitle']").fill("Manager")
//Fill the Annual Revenue
await page.locator("//input[@id='createLeadForm_annualRevenue']").fill("5000000")
//Fill the Department 
await page.locator("//input[@id='createLeadForm_departmentName']").fill("Software Developement")
//Fill the Phone number 
await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill("8547965696")
//Click Create Lead button 
await page.locator("//input[@name='submitButton']").click()
//Verify the company name, first name, last name and the status using auto retrying and non retrying assertions 
const ComapnyActual= await page.title()
const ComapnyExp="Analytics Solutions"

// Auto-retrying assertions: retries until timeout

    await expect(page.locator('#viewLead_companyName_sp')).toContainText('Analytics');
    await expect(page.locator('#viewLead_firstName_sp')).toHaveText('Web');
    await expect(page.locator('#viewLead_lastName_sp')).toHaveText('Chindage');

// Non-retrying assertion: is evaluated once, then asserted.
    const statusText = await page.locator('#viewLead_statusId_sp').textContent();
    expect(statusText?.trim()).toBe('Assigned');

})