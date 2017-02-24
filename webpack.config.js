let LiveReloadPlugin = require('webpack-livereload-plugin');
let options = {};

module.exports = {
    entry: './src/app/js/index.jsx',
    output: {
        path: __dirname + '/src/web/js',
        filename: 'bundle.min.js',
    },
    module: {
        loaders: [{
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }],
    },
    plugins: [
        new LiveReloadPlugin(options)
    ],
    watch: true,
};
