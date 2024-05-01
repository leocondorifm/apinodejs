const express = require('express');
const app = express();
//https://www.youtube.com/watch?v=AWcm56_eNZg&t=512s&ab_channel=Codelia
app.use(express.json());

const products = [
    {
        "id": 1,
        "nombre": "name1",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 1",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "https://youtu.be/7z0y4vnzNO4?si=8fhrKR7m8uTrDos1",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 2,
        "nombre": "name2",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 2",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "src/assets/video/videoproducto-cafe.mp4",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 3,
        "nombre": "name1",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 1",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "https://youtu.be/7z0y4vnzNO4?si=8fhrKR7m8uTrDos1",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 4,
        "nombre": "name2",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 2",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "src/assets/video/videoproducto-cafe.mp4",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 5,
        "nombre": "name1",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 1",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "https://youtu.be/7z0y4vnzNO4?si=8fhrKR7m8uTrDos1",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 6,
        "nombre": "name2",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 2",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "src/assets/video/videoproducto-cafe.mp4",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 7,
        "nombre": "name1",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 1",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "https://youtu.be/7z0y4vnzNO4?si=8fhrKR7m8uTrDos1",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 8,
        "nombre": "name2",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 2",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "src/assets/video/videoproducto-cafe.mp4",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 9,
        "nombre": "name1",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 1",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "https://youtu.be/7z0y4vnzNO4?si=8fhrKR7m8uTrDos1",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 10,
        "nombre": "name2",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 2",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "src/assets/video/videoproducto-cafe.mp4",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 11,
        "nombre": "name1",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 1",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "https://youtu.be/7z0y4vnzNO4?si=8fhrKR7m8uTrDos1",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 12,
        "nombre": "name2",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 2",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "src/assets/video/videoproducto-cafe.mp4",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 13,
        "nombre": "name1",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 1",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "https://youtu.be/7z0y4vnzNO4?si=8fhrKR7m8uTrDos1",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 14,
        "nombre": "name2",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 2",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "src/assets/video/videoproducto-cafe.mp4",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 15,
        "nombre": "name1",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 1",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "https://youtu.be/7z0y4vnzNO4?si=8fhrKR7m8uTrDos1",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 16,
        "nombre": "name2",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 2",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "src/assets/video/videoproducto-cafe.mp4",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 17,
        "nombre": "name1",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 1",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "https://youtu.be/7z0y4vnzNO4?si=8fhrKR7m8uTrDos1",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 18,
        "nombre": "name2",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 2",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "src/assets/video/videoproducto-cafe.mp4",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 19,
        "nombre": "name1",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 1",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "https://youtu.be/7z0y4vnzNO4?si=8fhrKR7m8uTrDos1",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    },
    {
        "id": 20,
        "nombre": "name2",
        "descripcion": "Top 5-s Programming Languages to Learn in 2021 | Best Programming Languages to Learn",
        "stock": 2,
        "categoria": "Categoria 2",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_707669-MLA47725901552_102021-F.webp",
        "video": "src/assets/video/videoproducto-cafe.mp4",
        "vistas": 456,
        "timestamp": "03/12/2023 20:21"
    }   
      

]

app.get('/', (req,res) => {
    res.send('Node JS api');
});

app.get('/data/products', (req, res) =>{
    res.send(products);
});

app.get('/data/products/:id', (req,res) => {
    const product = products.find(c=> c.id === parseInt(req.params.id));
    if(!product) return res.status(404).send('Producto no encontrado');
    else res.send(product);
});

app.post('/data/products', (req, res) =>{
    const product = {
        "id": products.length +1,
        "nombre": req.body.nombre,
        "descripcion": req.body.descripcion,
        "stock": parseInt(req.body.stock),
        "categoria": req.body.categoria,
        "imagen": req.body.img,
        "video": req.body.video,
        "vistas": req.body.vistas,
        "timestamp": req.body.timestamp
    }

    products.push(product);
    res.send(product);

});

app.delete('/data/products/:id' , (req,res) =>{
    const product = products.find(c=>c.id === parseInt(req.params.id));
    if(!product) return res.status(404).send('Producto no encontrado');

    const index = products.indexOf(product);
    products.slice(index, 1);
    res.send(product);
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`))
