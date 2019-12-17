const mongoose = require('mongoose'), 
      express = require('express'),
      product = require('./routes/product'),
      app = express();

app.use(express.json());
app.use('/api/v1/product/', product);

const port = process.env.PORT || 3333;


app.listen(port, ()=> console.log("Listen to: " + port));

mongoose.connect('mongodb://localhost/productsdb', {useNewUrlParser: true})
    .then(()=> console.log('[Conectado correctamente a Mongo DB]')
    )
    .catch(()=> console.log('Error al conectar con la BD'));




