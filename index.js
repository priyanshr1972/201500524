const express = require('express')
const cookieParser= require('cookie-parser')
const bodyParser=require('body-parser')
const fetch = require('node-fetch')

const app= express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(bodyParser.json());
const port= process.env.PORT ||8000;

app.get('/',(req,res)=>{
   res.send('Hello World');
})

app.listen(port,()=>{
    console.log('Server is running');
})
 
app.get('/train', async (req, res) => {
    try {
        const response = await fetch('http://localhost:5000/register',{
            method:'POST',
            body:JSON.stringify({"companyName":"example"}),
            headers:{
              'content-Type':'application/json'
            }
        })
        const data = await response.json();
        console.log(data);

        const response2 = await fetch('http://localhost:5000/auth',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
              'content-Type':'application/json'
            }
        })
        
        const data2 = await response3.json();
        console.log(data3);
        res.send(data3);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error System fail');
    }  
});
