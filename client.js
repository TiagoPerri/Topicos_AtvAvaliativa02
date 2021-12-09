const axios = require('axios').default;

function putNoticia() {
    return axios.put('http://localhost:3000/noticia/3')
    .then((res) => {
        console.log(res.data);
    })
}

function postTodosEmail() {
    return axios.post('http://localhost:3000/inscricao', {email:'email1@teste.com'})
    .then((res) => {
        console.log(res.data);
        return axios.post('http://localhost:3000/inscricao', {email:'email2@teste.com'})
    })
    .then((res) => {
        console.log(res.data);
        return axios.post('http://localhost:3000/inscricao', {email:'email3@teste.com'})
    })
    .then((res) => {
        console.log(res.data);
        return axios.post('http://localhost:3000/inscricao', {email:'email4@teste.com'})
    })
    .then((res) => {
        console.log(res.data);
        return axios.post('http://localhost:3000/inscricao', {email:'email5@teste.com'})
    })
    .then((res) => {
        console.log(res.data);
        return axios.post('http://localhost:3000/inscricao', {email:'email6@teste.com'})
    })
    .then((res) => {
        console.log(res.data);
        return axios.post('http://localhost:3000/inscricao', {email:'email7@teste.com'})
    })
    .then((res) => {
        console.log(res.data);
        putNoticia();
    })
}

function getNoticia() {
    return axios.get('http://localhost:3000/noticia/3')
        .then((response) => {
            console.log(response.data);
            postTodosEmail();
        });
} 


function getTodasNoticias() {
    return axios.get('http://localhost:3000/noticia')
        .then((response) => {
            console.log(response.data);
            getNoticia();
        });
} 

function postTodasNoticias() {
    return axios.post('http://localhost:3000/noticia', {
        titulo: 'Exclusivo: esportivo Toyota Corolla GR de 300 cv virá ao Brasil',
        resumo: 'Versão apimentada do Corolla será hatchback com motor 1.6 turbo de três cilindros e tração integral',
        url: 'https://motor1.uol.com.br/news/553241/toyota-corolla-esportivo-brasil/'
    })
    .then((res) => {
        console.log(res.data);
        return axios.post('http://localhost:3000/noticia', {
            titulo: 'F1: Mercedes rescinde com patrocinadora após pressão de Hamilton; entenda.',
            resumo: 'Durou pouco o patrocínio da empresa irlandesa Kingspan à Mercedes na Fórmula 1. O contrato que valeria para as duas últimas corridas desta temporada foi encerrado hoje (8) após muita pressão externa e até um ultimato de Lewis Hamilton.',
            url: 'https://www.uol.com.br/esporte/ultimas-noticias/2021/12/08/f1-mercedes-rescinde-com-patrocinadora-apos-pressao-de-hamilton-entenda.htm'
        })
    })
    .then((res) => {
        console.log(res.data);
        return axios.post('http://localhost:3000/noticia', {
            titulo: '7 tênis que bombaram em 2021: dos que calçam sozinhos aos feitos de sangue.',
            resumo: 'Mesmo que tenhamos passado a maior parte do tempo dentro de casa neste último ano, ainda assim os tênis não deixaram de ocupar um espaço importante na moda.',
            url: 'https://www.uol.com.br/nossa/noticias/redacao/2021/12/08/os-tenis-que-bombaram-em-2021-dos-que-calcam-sem-as-maos-ate-sangue-humano.htm'
        })
    })
    .then((res) => {
        console.log(res.data);
        return axios.post('http://localhost:3000/noticia', {
            titulo: 'Benfica vence Dynamo, avança na Champions e dá fôlego a Jorge Jesus.',
            resumo: 'Não adiantou o torcedor do Flamengo secar. O Benfica fez a lição de casa nesta quarta-feira (8), venceu o Dynamo de Kiev em casa por 2 a 0 e contou com a derrota do Barcelona diante do Bayern de Munique para avançar às oitavas de final da Liga dos Campeões.',
            url: 'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2021/12/08/benfica-x-dynamo-de-kiev.htm'
        })
    })
    .then((res) => {
        console.log(res.data);
        return axios.post('http://localhost:3000/noticia', {
            titulo: 'BC sobe juros pela 7ª vez, a 9,25% ao ano, maior ciclo de altas desde 2002.',
            resumo: 'O Copom (Comitê de Política Monetária) do Banco Central decidiu hoje, por unanimidade, subir a taxa básica de juros da economia (Selic) em 1,5 ponto percentual, de 7,75% para 9,25% ao ano — maior patamar desde julho de 2017, quando estava em 10,25% ao ano.',
            url: 'https://economia.uol.com.br/noticias/redacao/2021/12/08/bc-copom-juros-selic-8-dezembro.htm'
        })
    })
    .then((res) => {
        console.log(res.data);
        getTodasNoticias();
    })
    .catch(err => {
        console.log(err.response.data);
    });
}

postTodasNoticias();