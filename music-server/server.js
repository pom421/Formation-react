var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser')

app.use(express.static('public')); // ICI IMPORTANT !
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const tabArtiste = [
    { "id": 1, "nom": "Johny" },
    { "id": 2, "nom": "PNL" },
    { "id": 3, "nom": "Lorie" },
];

const tabPochette = [
    { "id": 1, "image": "http://e-cdn-images.deezer.com/images/cover/b67364199718a9df62dd28e1c8eeffd5/500x500.jpg", },
    { "id": 2, "image": "https://img.discogs.com/yNBQZE2VW8E-AriVUtbvCYZ7kLw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2789321-1413146304-7666.jpeg.jpg" },
    { "id": 3, "image": "https://d1k5w7mbrh6vq5.cloudfront.net/images/cache/0c/32/fa/0c32faa774d0d9ec6505af688d015815.jpg" },
    { "id": 4, "image": "http://www.nouvelle-vague.com/wp-content/uploads/2017/10/LIVE-PNL.jpg" },
];
const tabCategorie = [
    { "id": 1, "nom": "Daube" },
    { "id": 2, "nom": "RAP" },
    { "id": 3, "nom": "Rock" },
];
const tabTitres = [
    { "id": 1, "nom": "musique1", "idAlbum": 1 },
    { "id": 2, "nom": "musique2", "idAlbum": 1 },
    { "id": 3, "nom": "musique3", "idAlbum": 1 },
    { "id": 4, "nom": "musique4", "idAlbum": 2 },
    { "id": 5, "nom": "musique5", "idAlbum": 2 },
    { "id": 6, "nom": "musique6", "idAlbum": 3 },
    { "id": 7, "nom": "musique7", "idAlbum": 3 },
    { "id": 8, "nom": "musique8", "idAlbum": 3 },
    { "id": 9, "nom": "musique9", "idAlbum": 3 },
    { "id": 10, "nom": "musique10", "idAlbum": 3 },
];


tabAlbum = [
    { "id": 1, "titre": "WeekEnd", "idPochette": 3, "idArtiste": 3, "idCategorie": 1 },
    { "id": 2, "titre": "Johny1", "idPochette": 1, "idArtiste": 1, "idCategorie": 3 },
    { "id": 3, "titre": "Romain", "idPochette": 4, "idArtiste": 2, "idCategorie": 2 },
];



// This responds to a GET request with "Hello World" on the homepage
app.get('/categories', function (req, res) {
    console.log("Appel liste de categorie");
    res.contentType('application/json');
    res.send(JSON.stringify(tabCategorie));
})

app.get('/artistes', function (req, res) {
    console.log("Appel liste de artistes");
    res.contentType('application/json');
    res.send(JSON.stringify(tabArtiste));
})

app.get('/pochettes', function (req, res) {
    console.log("Appel liste de pochettes");
    res.contentType('application/json');
    res.send(JSON.stringify(tabPochette));
})

app.get('/titres', function (req, res) {
    console.log("Appel liste de titres");
    if (req.query.idAlbum === undefined) {
        res.contentType('application/json');
        res.send(JSON.stringify(tabTitres));
    } else {
        let newtabTitres = []
        for (var i in tabTitres) {
            if (tabTitres[i].idAlbum == req.query.idAlbum) {

                newtabTitres.push(tabTitres[i]);
            }
        }
        res.contentType('application/json');
        res.send(JSON.stringify(newtabTitres));
    }

})



app.get('/albums', function (req, res) {
    console.log("Appel liste de albums");
    res.contentType('application/json');
    res.send(JSON.stringify(tabAlbum));
})

app.get('/albums', function (req, res) {
    console.log("Appel liste de albums");
    res.contentType('application/json');
    res.send(JSON.stringify(tabAlbum));
})

app.post('/albums', function (req, res) {
    let newAlbum = req.body;
    tabAlbum.push(newAlbum);
    result = ['Success'];
    res.contentType('application/json');
    res.send(JSON.stringify(result));
})

app.delete('/albums/:id', function (req, res) {
    let id = req.params.id;
    console.log("Delete Album  : " + id);
    let newTabAlbum = []
    for (var i in tabAlbum) {
        if (tabAlbum[i].id != id) {

            newTabAlbum.push(tabAlbum[i]);
        }
    }
    tabAlbum = newTabAlbum;
    result = ['Success'];
    res.contentType('application/json');
    res.send(JSON.stringify(result));
})

var server = app.listen(8090, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Serveur écoute sur http://%s:%s", host, port)
})
