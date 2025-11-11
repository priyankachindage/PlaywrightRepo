import test, { expect } from'@playwright/test'//test-fixture

test("Edit a Lead",async({page})=>{

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
//Click Find Leads 
await page.locator("//a[text()='Find Leads']").click()
//Enter the first name
await page.locator("(//input[@name='firstName'])[3]").fill("Priyanka")
//Click Find Leads button
await page.locator("//button[text()='Find Leads']").click()
await page.waitForTimeout(2000)
//Click the first resulting Lead ID 
await page.locator("//a[text()='10926']").click()
await page.waitForTimeout(5000)
//Click Edit 
await page.locator("//a[text()='Edit']").click()
await page.waitForTimeout(2000)
//Edit Company name 
await page.fill(("(//input[@name='companyName'])[2]"), 'SGCC')
//Edit Annual Revenue 
await page.locator('#updateLeadForm_annualRevenue').fill("7,000, 000")
//Edit Department
await page.locator("#updateLeadForm_departmentName").fill('Digital Team')
//Enter Description
await page.locator("#updateLeadForm_description").fill("Playwright Automation")
//Click Update 
await page.locator("(//input[@class='smallSubmit'])[1]").click()
//Verify the edited fields using appropriate assertions
// Auto-retrying assertions: retries until timeout

    await expect(page.locator('#viewLead_companyName_sp')).toContainText('SGCC')
    await expect(page.locator('#viewLead_departmentName_sp')).toHaveText('Digital Team')
    await expect(page.locator('#viewLead_annualRevenue_sp')).toContainText('7,000,000')
    await expect(page.locator('#viewLead_description_sp')).toHaveText('Playwright Automation')


// Non-retrying assertion: is evaluated once, then asserted.
    const statusText = await page.locator('#viewLead_statusId_sp').textContent()
    expect(statusText?.trim()).toBe('Assigned')

})
