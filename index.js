const express = require('express');
const app = express();

//set static folder
app.use(express.static(__dirname + '/materials'));

//use handlebars
const hbs = require('express-handlebars');
app.engine(
	'hbs',
	hbs({
		extname: 'hbs',
		layoutsDir: __dirname + '/views/layouts',
		partialsDir: __dirname + '/views/partials',
		defaultLayout: 'layout'
	})
);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.render('index');
});

const itemsSJ = [
	{
		label: 'Necessities',
		image: '/image/jars/necessities.png',
		number: '55%',
		money: '0',
		id: 'necessities'
	},
	{
		label: 'Play',
		image: '/image/jars/play.png',
		number: '10%',
		money: '0',
		id: 'play'
	},
	{
		label: 'Financial Freedom',
		image: '/image/jars/financial.png',
		number: '10%',
		money: '0',
		id: 'financial'
	},
	{
		label: 'Education',
		image: '/image/jars/education.png',
		number: '10%',
		money: '0',
		id: 'education'
	},
	{
		label: 'Long-term Saving',
		image: '/image/jars/long-term.png',
		number: '10%',
		money: '0',
		id: 'long-term'
	},
	{
		label: 'Charity',
		image: '/image/jars/charity.png',
		number: '5%',
		money: '0',
		id: 'charity'
	}
];

app.get('/savingjardetail', (req, res) => {
	var context = {
		itemsSJ: itemsSJ
	};

	res.render('savingjardetail', context);
});

const zodiac = [
	{ image: '/Zodiacs/aquarius.jpg', name: 'Aquarius', detail: 'January 20- February 18' },
	{ image: '/Zodiacs/fish.jpg', name: 'Fish', detail: 'February 19 - March 20' },
	{ image: '/Zodiacs/aries.jpg', name: 'Aries', detail: 'March 21 - April 19' },
	{ image: '/Zodiacs/bull.jpg', name: 'Bull', detail: 'April 20 - May 20' },
	{ image: '/Zodiacs/twins.jpg', name: 'Twins', detail: 'May 21 - June 20' },
	{ image: '/Zodiacs/cancer.jpg', name: 'Cancer', detail: 'June 21 - July 22' },
	{ image: '/Zodiacs/lion.jpg', name: 'Lion', detail: 'July 23 - August 22' },
	{ image: '/Zodiacs/virgin.jpg', name: 'Virgin', detail: 'August 23 - September 22' },
	{ image: '/Zodiacs/horizontal.jpg', name: 'Horizontal', detail: 'September 23 - October 22' },
	{ image: '/Zodiacs/scorpio.jpg', name: 'Scorpio', detail: 'October 23 - November 21' },
	{ image: '/Zodiacs/contactors.jpg', name: 'Contactors', detail: 'November 22 - December 21' },
	{ image: '/Zodiacs/capricorn.jpg', name: 'Capricorn', detail: 'December 22 - January 19' }
];

app.get('/Zodiac', (req, res) => {
	var context = {
		zodiac: zodiac
    };
    
	res.render('Zodiac', context);
});

app.get('/Zodiac/:index', (req, res) => {
	let index = req.params.index;
	var context = {
		zodiac: zodiac[index]
	};
	res.render('Zodiac_detail', context);
});

//start server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () =>
	console.log(`server is listening on port 
    ${app.get('port')}`)
);
