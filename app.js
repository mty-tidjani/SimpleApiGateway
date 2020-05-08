import gateway from 'fast-gateway';

import router from "./router";
import middle from './middlewares/hello';

console.log(router);

const myGate = gateway({
  routes: router,
});

//myGate.use(middle)

const server = myGate.getServer();

server.listen(3023, function () {
  console.log('Example app listening on port 3023.');
});
