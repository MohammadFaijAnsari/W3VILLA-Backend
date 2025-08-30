const { Validatetoken } = require("../services/authentication");

function checkForAuthenticationCookie(cookiename) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookiename];

    if (!tokenCookieValue) {
      return next();   
    }

    try {
      const userPayload = Validatetoken(tokenCookieValue);
      req.user = userPayload;   
    } catch (error) { }
    next(); 
  };
}

module.exports = { checkForAuthenticationCookie };
