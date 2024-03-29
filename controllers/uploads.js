var fs = require('fs');

module.exports = function (app) {

    app.post("/upload/imagem", function (req, res) {
        console.log('Recebendo imagem...');

        var fileName = req.headers.filename;
        req.pipe(fs.createWriteStream('files/' + fileName))
            .on('finish', function () {
                console.log('Arquivo recebido com sucesso!');
                res.status(201).send('Imagem enviada com sucesso!');
            });
    });

};