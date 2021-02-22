const { config } = require('dotenv-yaml');
config();

const express = require('express');
const bodyParser = require('body-parser');
const sha256 = require('js-sha256');
const port = 3000;

const app = express();
app.use(bodyParser.json());

app.post('/', async (req, res) => {
    const { linkId, appId } = req.body;
    res.send(`https://www.heroesbibletrivia.org/redeem?appId=${appId}&linkId=${linkId}&sig=${sha256(`${process.env.PRIVATE_KEY}${linkId}${appId}`)}`);
});

app.listen(port, () => console.log(`Started server at http://localhost:${port}!`));

