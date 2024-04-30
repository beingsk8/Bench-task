const path=require('path');
const hbs=require('hbs');
const express=require('express');
const calculator = require("./utils/calculate");
const app = express()
//Define paths for express config

const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../template/partials')

//set handlebars engine and views location
app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

//setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.get('/',(req,res)=>{
    res.render('index',{
        title:'Calculator app',
        name:'By: Sourav kumar',
    })
})

app.post('/calculate',(req,res)=>{
    if(!req.query.num1) {
        return res.send({
            error: "Please provide first value"
        })
    } else if (!req.query.num2) {
        return res.send({
            error: "Please provide second value"
        })
    }  else if (!req.query.operation) {
        return res.send({
            error: "Please provide add/subtract/divide/multiplication"
        })
    }
    else{
        calculator(+req.query.num1, +req.query.num2, req.query.operation, (error, response) => {

            if(error) {
                return res.send({
                    error
                })
            }

            res.send({
                // firstValue: (JSON.parse(req.query.firstValue) * JSON.parse(req.query.secondValue)),
                // secondValue: req.query.secondValue,
                // calculate: req.query.calculate
                response
            })
        })
    }
})
/* unknown routes */
app.get('*',(req,res)=>{
    res.render('404',{
        errorMessage:'page Does not exist',
    });
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})