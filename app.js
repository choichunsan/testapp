const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

app.get('/imapp', (req, res) => {
  res.send('Hello, front-im-app!');
});

app.get('/SM04000000/SM04020000/SM04050100', async (_req, res, _next) => {

    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});