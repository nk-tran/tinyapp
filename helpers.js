// FUNCTIONS & METHODS

function generateRandom() {
  return Math.random().toString(16).substring(2,8);
};

const getUserByEmail  = (email, userObj) => {
  for (let userKey in userObj) {    
    if (userObj[userKey].email === email) {
      return userObj[userKey];
    }
  }
  return undefined;
}


//Checks if email is already registered, returns true if already exists
const verifyNewEmail = (email, users) => {
  const givenEmail = email;
  for (let userKey in users) {    
    if (users[userKey].email === givenEmail) {
      return true;
    }
  }
  return false;
};

// Check if user id matches logged in id and returns their own links
const urlsForUser = (id, urlDatabase) => {
  const userList = {}
  for (let [keyUser, value] of Object.entries(urlDatabase)) {
    if (value.userID === id) {
      userList[keyUser] = value
    }
  } return userList;
};

// Check if user is logged in matches the shortURL
const shortUrlBelongsToUser = (id, shortURL, urlDatabase) => {
  for (let item in urlDatabase) {
    if ((urlDatabase[item].userID === id) && (item === shortURL)) { 
      return true;
    }
  }
  return false;
};


module.exports = { getUserByEmail, verifyNewEmail, urlsForUser, shortUrlBelongsToUser, generateRandom }