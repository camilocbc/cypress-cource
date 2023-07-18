module.exports = {
    apiKey: '5NwoGg9ngu28n9WR98IKtcPTzQyXvkVWeLJq31DM010760110',
    testConcurrency: 5,
    batchName: 'Example: Cypress in JavaScript with the Ultrafast Grid',
    browser: [
  
      // Add 3 desktop browsers with different viewports for cross-browser testing in the Ultrafast Grid.
      // Other browsers are also available, like Edge and IE.
      {width: 800, height: 600, name: 'chrome'},
      {width: 1600, height: 1200, name: 'firefox'},
      {width: 1024, height: 768, name: 'safari'},
  
  ],
}