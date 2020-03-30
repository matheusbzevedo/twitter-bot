require('dotenv').config();

const app = require('express')(),
    Twit = require('twit');

// const T = new Twit(require('./config/twit'));

// let search = { q: 'prior', count: 1, result_type: 'recent' };

// T.get('search/tweets', search, (error, data) => {
//     if (error) return console.log('Não foi possível pegar o último tweet.');

//     if (data && data.statuses.length > 0) {
//         let tweet = data.statuses[0];

//         T.post('statuses/retweet/' + tweet.id_str, (e, res) => {
//             if (e) return console.log('Não foi possível dar RT');
//             if (res) return console.log('RT feito com sucesso!');
//         });
//     } else {
//         console.log('Sem tweets com com o: ' + search.q);
//     }
// });

// app.listen(3000, () => console.log('rodando na porta 3000'));