const express = require('express')
const app= express()    
app.use(express.json())
const PORT=3001;

// app.get('/api', (req, res) => {
//     res.redirect('https://bbc.co.uk');
// })

// app.post('/api/adduser', (req, res) =>{
// res.json(req.body);
// });

// app.get('/api/*', (req, res) => {
//     res.json({api:"api route NOT FOUND"});
// })

application.get("/api/*", (req, res) => {
    console.log(req.path)
});

app.listen (PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})