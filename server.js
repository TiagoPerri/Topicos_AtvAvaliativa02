const express = require('express');
const storage = require('node-persist');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function main() {
    await storage.init();
    await storage.setItem('noticias',
        [
            {
                ID: 1,
                titulo: 'Como o café nosso de cada dia é fabricado e fica pronto para ser tomado?',
                resumo: 'Para muita gente, o dia só começa depois que se toma a primeira xícara de café. Segundo dados da Euromonitor International, se todo brasileiro tomasse café, em 2020 cada habitante do país teria consumido o equivalente a 826 xícaras da bebida',
                url: 'https://www.uol.com.br/tilt/noticias/redacao/2021/12/09/como-o-cafe-nosso-de-cada-dia-e-fabricado-e-fica-pronto-para-ser-tomado.htm'
            }
        ]
    );
    await storage.setItem('emails',[{email : 'email0@gmail.com'}]);

    postNoticia(); getNoticia();
}

async function postNoticia() {
    await app.post('/noticia', async(req, res) => {
        const novaNoticia = req.body;

        await storage.init();
        const noticias = await storage.getItem('noticias');

        const idMax = noticias.reduce(
            (max, noticia) => (noticia.ID > max ? noticia.ID : max),
            noticias[0].ID
        );
        novaNoticia.ID = idMax + 1;

        noticias.push(novaNoticia);
        await storage.updateItem('noticias',noticias);
        res.send('Notícia Adicionada.');
    });
}

async function getNoticia() {
    await app.get('/noticia', async (req, res) => {
        await storage.init();

        let noticias = await storage.getItem('noticias');

        res.send(noticias);
    });
}

app.listen(3000, () => {
    console.log(`Servidor iniciado no endereço: http://localhost:3000`);
});
main().catch(console.error);