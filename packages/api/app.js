const express = require('express');
const app = express();
const PORT = process.env.PORT || 1234;

app.get('/', (req, res) => {
  res.send({"data": "api is working"})
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));