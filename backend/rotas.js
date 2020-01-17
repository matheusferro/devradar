
const express = require('express');
const app = express();
app.use(express.json());


//get, post, put, delete
app.get('/', (req, res) => {
    return res.json({
        message:'HELLO WORLD'
    });
});

//Tipos de parametros: 
//QUERY= req.query (Filtros, ordenação, paginação...) 
//ROUTE = req.params (Identifica um recurso na alteração ou remoção)
//BODY = req.body (pega)



app.delete("/users/:id", (request, response) => {
    console.log(request.params);
    return response.json({
        message:'HELLO WORLD'
    });
});
//post ou put
app.post("/users", (request, response) => {
    console.log(request.body);
    return response.json({
        message:'HELLO WORLD'
    });
});

app.listen(3333);