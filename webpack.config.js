const path = require('path');

//webpack.config.js
module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    }
};