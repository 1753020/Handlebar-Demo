const express = require('express');
const app = express();

//set static folder
app.use(express.static(__dirname + '/src'));

//use handlebars
const hbs = require('express-handlebars');
app.engine('hbs', hbs({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'layout'
}));
app.set('view engine', 'hbs');



//start server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => (
    console.log(`server is listening on port 
    ${app.get('port')}')`)
));
