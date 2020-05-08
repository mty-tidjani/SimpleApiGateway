const gateway = require('fast-gateway');

const routes = require("./router");


const myGate = gateway(routes);

server = myGate.getServer();

server.listen(3023, function () {
  console.log('Example app listening on port 3023.');
});
