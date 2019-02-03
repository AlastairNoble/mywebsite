const   express = require('express'),
        app     = express();
        
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('home'); 
});

app.get('/resume', (req, res) => {
   res.render('resume'); 
});

app.get('/fun', (req, res) => {
    res.render('fun');
});

app.get('/qhacks', (req, res) => {
    res.render('qhacks');
});

app.listen(process.env.PORT, process.env.IP, () => console.log("its running boi"));