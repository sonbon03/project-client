// webpack.config.js
const webpack = require('webpack');

module.exports = {
    // ...
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'), // or 'production' or 'test'
            },
        }),
    ],
    // ...
};