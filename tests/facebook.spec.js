const { test, expect } = require('@playwright/test');

test('Post Facebook Hello Playwright!', async ({ page }) => {

    await test.step('step 1 :: Go to web', async ()  => {
        await page.goto('https://www.facebook.com/?locale=th_TH');
        await expect(page.locator('h2')).toHaveText('Facebook ช่วยคุณเชื่อมต่อและแชร์กับผู้คนมากมายรอบตัวคุณ');
    });
    
    await test.step('step 2 :: Input email', async ()  => {
        const email = page.locator('#email');
        await expect(email).toBeEditable();
        await email.fill('');
    });

    await test.step('step 3 :: Input password', async ()  => {
        const password = page.locator('id=pass');
        await expect(password).toBeEditable();
        await password.fill('');
    });
    
    await test.step('step 4 :: Click login button', async ()  => {
        const loginButton = page.getByTestId('royal_login_button');
        await expect(loginButton).toBeEnabled();
        await loginButton.click();
    });
    
    await test.step('step 5 :: Post on facebook', async () => {
        // ตรวจสอบ ชื่อ เมื่อเข้าสู่ระบบสำเร็จ
        await expect(page.getByText('Chloe Navia')).toBeVisible();

        //กดเพื่อเขียน
        await page.getByRole('button', { name: 'คุณคิดอะไรอยู่ Chloe' }).click();
                
        //เขียนข้อความ
        await page.getByLabel('คุณคิดอะไรอยู่ Chloe').fill('สวัสดี Playwright!');
        
        //คลิกปุ่ม ถัดไป
        const nextButton = page.getByRole('button', { name: 'ถัดไป' });
        await expect(nextButton).toBeEnabled();
        await nextButton.click();
        
        //คลิกปุ่ม โพสต์
        await expect(page.getByRole('button', { name: 'โพสต์' })).toBeEnabled();
        await page.getByRole('button', { name: 'โพสต์'}).click();
        // await page.getByRole('button', { name: 'ปิด'}).click();
    });

    await test.step('step 6 :: Verify "สวัสดี Playwright!" ', async () => {
        await expect(page.getByText('สวัสดี Playwright!')).toBeVisible();
    });

});