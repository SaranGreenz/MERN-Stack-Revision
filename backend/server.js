const app = require('express')();

app.use(require('express').json());
app.use(require('cors')());
require('dotenv').config()
const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log('Server is running on port: ', port);
});
