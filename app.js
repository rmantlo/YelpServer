let express = require('express');
const app = express();
let yelp = require('./controllers/yelpcontroller');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(require('./middleware/headers'));

app.use('/yelp', yelp);

app.listen(3000, function(){
    console.log('app listening on 3000')
})