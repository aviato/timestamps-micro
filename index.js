const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/*', function (req, res) {
  const { url }       = req;
  const time          = url.split('/')[1];
  const sanitizedTime = time.replace(/%20/g, " ");
  const timestamp     = {
    unix: Date.parse(new Date(sanitizedTime)),
    natural: sanitizedTime
  };

  res.send(timestamp);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
