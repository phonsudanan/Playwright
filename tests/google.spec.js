// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('ผู้ใช้งานทำการค้นหาคำว่า หวย และจะต้องเจอผลการค้นหาตาม Requirement ', async ({ page }) => {
  
//   await test.step('step 1 :: Go to web', async ()  => {
//     await page.goto('https://www.google.co.th/');
//   });

//   const searchField = page.locator('#APjFqb');
//   await searchField.fill('หวย');
//   await searchField.press('Enter');

//   // await page.locator('textarea[id=APjFqb]').fill('หวย');
//   // Expect a title "to contain" a substring.
//   // assert ผลการค้นหาประมาณ 81,000,000 รายการ (0.34 วินาที) 

//   await expect(page.locator('#result-stats')).toHaveText(/ผลการค้นหาประมาณ/);
//   await expect(page.locator('#result-stats')).toHaveText(/รายการ/);
//   await expect(page.locator('#result-stats')).toHaveText(/วินาที/);

//   await expect(page.locator('#result-stats')).toHaveText(/ผลการค้นหาประมาณ \d{1,3},\d{3},\d{3} รายการ \(\d{1,2}\.\d{1,2} วินาที\)/);


// });

