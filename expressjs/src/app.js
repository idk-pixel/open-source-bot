class App {
    constructor() {
        this.app = require('express')();
        this.ejs = require(
            'ejs'
        );
        this.fs = require('fs');
        this.path = require('path');
    }
    start(configuration) {
        this.app.listen(configuration.express.port || 3001, () => console.log("Listening on specified port"))
        this.app.get('/',(req,res)=>{res.render(__dirname + '/views/index')});
    }
}

module.exports = App