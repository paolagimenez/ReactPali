const express=require('express');
const app= express();
const port=4001;

app.use(express.json());

app.use('/personas',require('./routes/personasRoutes'));


app.listen(port,()=>{
    console.log("Escuchando por el puerto "+ port)
});
