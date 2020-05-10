const auth = (req, res, next) => {
  console.log("Hello");
  console.log("You must be auttenticated to pass");
  next()   
}

export default auth;
