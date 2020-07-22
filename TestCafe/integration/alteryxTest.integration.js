const pjson =  require("../../package.json");
const { ClientFunction, Selector, after } = require('testcafe');
const BASE_URL = pjson.baseUrl;
const FIRST_URL = `${BASE_URL}/first`;
const SECOND_URL = `${BASE_URL}/second`;

const RED_TEXT = 'Incorrect';
const GREEN_TEXT = 'Correct';

const RED_COLOR = 'rgb(255, 0, 0)';
const GREEN_COLOR = 'rgb(0, 255, 0)';

const getLocation = ClientFunction(() => document.location.href);

fixture('Getting Started').page(BASE_URL);

// It's too hard to find adequate name for this test :)
test('Basic user journey', async t => { 
  // Check if url correct without redirect
  await t.expect(getLocation()).eql(FIRST_URL);

  // Click on button and check if url correct after redirection
  const redirectButton = Selector('button').withAttribute('try-to-find-this-attribute', 'find-by-me')
  await t.click(redirectButton);
  await t.expect(getLocation()).eql(SECOND_URL);

  const h2 = Selector('h2');

  // check that h2 text is "Incorrect" and color is red by default
  await t.expect(h2.withText(RED_TEXT).exists).ok()
  await t.expect(h2.withText(RED_TEXT).getStyleProperty('color')).eql(RED_COLOR);

  // type correct value and check that h2 text is "Correct" and color is green
  const correctText = await Selector('h1').child('span').textContent;
  await t.typeText('input', correctText);
  await t.expect(h2.withText(GREEN_TEXT).exists).ok()
  await t.expect(h2.withText(GREEN_TEXT).getStyleProperty('color')).eql(GREEN_COLOR);

  // type correct value and check that h2 text is "Correct" and color is green
  await t.typeText('input', `${correctText}_1`); // just to be sure this is incorrect value
  await t.expect(h2.withText(RED_TEXT).exists).ok()
  await t.expect(h2.withText(RED_TEXT).getStyleProperty('color')).eql(RED_COLOR);
});
