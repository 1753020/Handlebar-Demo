const express = require('express');
const app = express();

//set static folder
app.use(express.static(__dirname + '/materials'));

//use handlebars
const hbs = require('express-handlebars');
app.engine('hbs', hbs({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'layout'
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
})

const itemsSJ = [
    {
        label : "Necessities",
        image : "/image/jars/necessities.png",
        number : "55%",
        money : "0",
        id : "necessities"
    },
    {
        label : "Play",
        image : "/image/jars/play.png",
        number : "10%",
        money : "0",
        id : "play"
    },
    {
        label : "Financial Freedom",
        image : "/image/jars/financial.png",
        number : "10%",
        money : "0",
        id : "financial"
    },
    {
        label : "Education",
        image : "/image/jars/education.png",
        number : "10%",
        money : "0",
        id : "education"
    },
    {
        label : "Long-term Saving",
        image : "/image/jars/long-term.png",
        number : "10%",
        money : "0",
        id : "long-term"
    },
    {
        label : "Charity",
        image : "/image/jars/charity.png",
        number : "5%",
        money : "0",
        id : "charity"
    }
]

app.get('/savingjardetail', (req, res) => {
    var context = {
        itemsSJ : itemsSJ
    }

    res.render('savingjardetail', context);
})

//start server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => (
    console.log(`server is listening on port 
    ${app.get('port')}`)
));
