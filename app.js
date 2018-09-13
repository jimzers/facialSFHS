

bodyParser = require('body-parser');
express = require('express');
path = require('path');

// init app
app = express();


// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Global Vars
app.use(function(req, res, next){
    res.locals.errors = null;
    next();
});

// Include routes
const indexRoutes = require("./routes/index");
app.use(indexRoutes);

/** SERVER LISTENER **/
app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("facialSFHS started");
});