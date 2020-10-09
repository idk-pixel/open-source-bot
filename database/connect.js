const start = async () => {
    const mongoose = require('mongoose');
    const configuration = require('../../../bot_config.json');
    await mongoose.connect(configuration.mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        console.log(err);
    })
}

module.exports = { start };