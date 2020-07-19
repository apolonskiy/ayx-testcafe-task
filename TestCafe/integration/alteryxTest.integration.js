const pjson =  require("../../package.json");
const BASE_URL = pjson.baseUrl;
const FIRST_URL = `${BASE_URL}/first`;
const SECOND_URL = `${BASE_URL}/second`;

const RED_TEXT = 'Incorrect';
const GREEN_TEXT = 'Correct';

const RED_COLOR = 'rgb(255, 0, 0)';
const GREEN_COLOR = 'rgb(0, 255, 0)';

  test( {
      // check if url is correct. It means it's same as expected (first), no redirection happened after initial attempt to access

      // click on button and check if url is correct after redirection

      // check that h2 text is 'Incorrect' and color is red by default

      //type correct value and check that h2 text is 'Correct' and color is green

      //type incorrect value and check that h2 text is 'Incorrect' and color is red
  })
 
after({
  clear input field
})
