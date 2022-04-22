

const getUserByEmail  = (email, userObj) => {
  for (let userKey in userObj) {    
    if (userObj[userKey].email === email) {
      return userObj[userKey];
    }
  }
  return undefined;
}

module.exports = getUserByEmail 