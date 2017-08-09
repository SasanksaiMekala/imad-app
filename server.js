var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne ={
    title : 'article - one',
    content : `
    <p>
                        This is the content for the firsrt article
                        This is the content for the firsrt article
                        This is the content for the firsrt article
                        This is the content for the firsrt article
                    </p>`
                    
    
}
var htmltemplate = { `
<html>
    <head>
        <title>
            Article one - Sasank Sai
        </title>
        <style>
           
            
        </style>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class=container>
            
                <div>
                    <a href="/">Home</a>
                </div>
                <br>
                <h3>
                    Article one
                </h3>
                <div>
                    Aug 8 2017
                    
                </div>
                <div>
                    {content}
                </div>
        </div>
    </body>
</html>

    
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app/get('/article-one',function (req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 9009;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
