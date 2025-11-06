const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function run() {
  if (process.platform === 'win32') process.env.CHROME_LOG_FILE = 'NUL';

  const isHeadless = process.env.HEADLESS !== 'false';
  const opts = new chrome.Options()
    .addArguments(
      '--disable-gpu',
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--disable-logging',
      '--log-level=3'
    )
    .excludeSwitches('enable-logging');

  if (isHeadless) {
    opts.addArguments('--headless=new');
  } else {
    opts.addArguments('--window-size=1280,900');
  }

  const driver = await new Builder().forBrowser('chrome').setChromeOptions(opts).build();
  const TEST_TIMEOUT_MS = 30000;

  try {
    await driver.get('http://127.0.0.1:5173');
    await driver.sleep(50);
    await driver.wait(() => driver.executeScript('return document.readyState==="complete"'), 5000);
    await driver.wait(() => driver.executeScript('return !!(window.JSTypingState&&window.JSTypingState.line1Done)'), TEST_TIMEOUT_MS);
    const c1 = await driver.executeScript('return getComputedStyle(document.getElementById("cursor1")).visibility');
    if (c1 !== 'hidden') throw new Error('cursor1 should be hidden after line 1');

    await driver.wait(async () => {
      const v = await driver.executeScript('return getComputedStyle(document.getElementById("cursor2")).visibility');
      return v === 'visible';
    }, 5000, 'cursor2 did not become visible');

    await driver.wait(() => driver.executeScript('return !!(window.JSTypingState&&window.JSTypingState.line2Done)'), TEST_TIMEOUT_MS);
    const c2 = await driver.executeScript('return getComputedStyle(document.getElementById("cursor2")).visibility');
    if (c2 !== 'visible') throw new Error('cursor2 should remain visible after line 2');

    console.log('✅ Test passed');
  } finally {
    await driver.quit();
  }
})();


