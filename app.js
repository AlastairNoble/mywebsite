const   express = require('express'),
        app     = express();


        
        
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('home'); 
});

app.get('/contact', (req,res) => {
    res.render('contact');
});

app.get('/resume', (req, res) => {
   res.render('resume'); 
});

app.listen(process.env.PORT, process.env.IP, () => console.log("its running boi"));